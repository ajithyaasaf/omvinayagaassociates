import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload, Image as ImageIcon, Video, X,
    Trash2, Loader2, AlertCircle, CheckCircle2,
    Filter
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function GalleryManager() {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('General');
    const [filter, setFilter] = useState('all');

    const fileInputRef = useRef(null);
    const { toast } = useToast();
    const queryClient = useQueryClient();

    // Fetch gallery items
    const { data: galleryItems = [], isLoading } = useQuery({
        queryKey: ['/api/gallery'],
    });

    // Handle Drag Events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // Handle Drop
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelected(e.dataTransfer.files[0]);
        }
    };

    // Handle Input Change
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFileSelected(e.target.files[0]);
        }
    };

    const handleFileSelected = (file) => {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
            toast({
                title: "Invalid file type",
                description: "Please select an image or video file.",
                variant: "destructive"
            });
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            toast({
                title: "File too large",
                description: "Maximum file size is 10MB.",
                variant: "destructive"
            });
            return;
        }

        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewUrl(e.target?.result);
        };
        reader.readAsDataURL(file);
    };

    const clearSelection = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setTitle('');
        setDescription('');
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const uploadMutation = useMutation({
        mutationFn: async () => {
            if (!selectedFile) throw new Error("No file selected");

            // Convert file to base64 so Vercel serverless function can receive it as JSON
            // (Vercel doesn't support raw multipart streams outside of Next.js)
            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    // Result is like "data:image/jpeg;base64,/9j/..." — strip the prefix
                    const result = reader.result;
                    const base64Data = result.split(',')[1];
                    resolve(base64Data);
                };
                reader.onerror = reject;
                reader.readAsDataURL(selectedFile);
            });

            const payload = {
                fileBase64: base64,
                mimeType: selectedFile.type,
                title: title || selectedFile.name,
                description,
                category,
            };

            const res = await fetch('/api/upload-and-save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || "Upload failed");
            }
            return data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
            toast({
                title: "Success!",
                description: "Media uploaded and added to the gallery.",
            });
            clearSelection();
        },
        onError: (error) => {
            toast({
                title: "Upload Failed",
                description: error.message,
                variant: "destructive"
            });
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            await apiRequest("DELETE", `/api/gallery/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
            toast({
                title: "Deleted",
                description: "Item removed from gallery.",
            });
        },
        onError: (error) => {
            toast({
                title: "Delete Failed",
                description: error.message,
                variant: "destructive"
            });
        }
    });

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter((i) => i.type === filter);

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Gallery Management
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Upload premium photos and videos to the main gallery portfolio.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                            <Upload className="w-5 h-5 text-indigo-500" />
                            Upload New Media
                        </h3>

                        {!selectedFile ? (
                            <div
                                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer
                  ${dragActive
                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10'
                                        : 'border-gray-200 dark:border-gray-600 hover:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    className="hidden"
                                    accept="image/*,video/*"
                                    onChange={handleChange}
                                />
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                        <Upload className="w-8 h-8" />
                                    </div>
                                </div>
                                <p className="font-medium text-gray-900 dark:text-white mb-1">
                                    Click or drag and drop
                                </p>
                                <p className="text-sm text-gray-500">
                                    Images (JPG, PNG) or Videos (MP4) up to 10MB
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                                    {selectedFile.type.startsWith('video/') ? (
                                        <video
                                            src={previewUrl}
                                            className="w-full h-full object-cover"
                                            controls
                                        />
                                    ) : (
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    <button
                                        onClick={clearSelection}
                                        className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="e.g. Luxury Apartment Solar Installation"
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Category
                                        </label>
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 outline-none transition-all text-sm"
                                        >
                                            <option value="General">General</option>
                                            <option value="Residential">Residential</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Industrial">Industrial</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Description (Optional)
                                        </label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 outline-none transition-all text-sm resize-none"
                                        />
                                    </div>

                                    <button
                                        onClick={() => uploadMutation.mutate()}
                                        disabled={uploadMutation.isPending}
                                        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-sm shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {uploadMutation.isPending ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                <Upload className="w-5 h-5" />
                                                Upload to Gallery
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="xl:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Current Gallery
                        </h3>

                        <div className="flex flex-wrap bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                            {['all', 'image', 'video'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all ${filter === type
                                        ? 'bg-white shadow-sm text-gray-900 dark:bg-gray-700 dark:text-white'
                                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
                                    {item.type === 'video' ? (
                                        <video src={item.mediaUrl} className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={item.mediaUrl} alt={item.title} className="w-full h-full object-cover" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                        <h4 className="text-white font-medium text-sm truncate">{item.title}</h4>
                                        <button
                                            onClick={() => deleteMutation.mutate(item.id)}
                                            className="mt-2 p-1 bg-red-500 text-white rounded text-xs"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
