import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import {
    Play,
    X,
    Home,
    ChevronRight,
    Maximize2,
    Loader2,
    ImageIcon
} from 'lucide-react';

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedMedia, setSelectedMedia] = useState(null);

    // Fetch gallery items
    const { data: galleryItems = [], isLoading } = useQuery({
        queryKey: ['/api/gallery'],
    });

    const categories = ['All', ...new Set(galleryItems.map(item => item.category).filter(Boolean))];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedMedia(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">

            {/* Header Section */}
            <section className="bg-[#2b4c7e] py-20 relative mb-16">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
                            Gallery Page
                        </h1>
                        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 font-medium leading-relaxed">
                            Discover our work, product highlights, and latest achievements through our visual gallery.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Modern Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`font-montserrat px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 ${activeFilter === category
                                ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Dynamic Masonry Grid */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                        <p className="text-gray-500 font-medium animate-pulse">Loading amazing visuals...</p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
                        <ImageIcon className="w-16 h-16 text-gray-300 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900">No Media Found</h3>
                        <p className="text-gray-500 mt-2">Check back soon for new portfolio updates.</p>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    key={item.id}
                                    className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-zoom-in"
                                    onClick={() => setSelectedMedia(item)}
                                >
                                    <div className="relative overflow-hidden">
                                        {item.type === 'video' ? (
                                            <div className="relative aspect-video">
                                                <video
                                                    src={item.mediaUrl}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 blur-[2px] contrast-125"
                                                    preload="metadata"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                                        <Play className="w-6 h-6 text-white ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={item.mediaUrl}
                                                    alt={item.title}
                                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                    <Maximize2 className="w-8 h-8 text-white drop-shadow-md" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Glassmorphic Description overlay on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                                        <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">{item.title}</h3>
                                        {item.description && (
                                            <p className="text-gray-200 text-sm line-clamp-2 leading-relaxed drop-shadow-sm">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Premium Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
                        onClick={() => setSelectedMedia(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-[110] group"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMedia(null);
                            }}
                        >
                            <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full h-full md:w-[90vw] md:h-[90vh] flex flex-col md:flex-row bg-[#0a0a0a] md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Left: Media Container */}
                            <div className="flex-1 relative flex items-center justify-center min-h-[50vh] md:min-h-0 bg-black/50 overflow-hidden">
                                {selectedMedia.type === 'video' ? (
                                    <video
                                        src={selectedMedia.mediaUrl}
                                        controls
                                        autoPlay
                                        controlsList="nodownload"
                                        className="w-full h-full object-contain p-4 md:p-8"
                                    />
                                ) : (
                                    <motion.img
                                        initial={{ scale: 1.1, filter: "blur(10px)" }}
                                        animate={{ scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 0.5 }}
                                        src={selectedMedia.mediaUrl}
                                        alt={selectedMedia.title}
                                        className="w-full h-full object-contain p-4 md:p-8 select-none"
                                        draggable="false"
                                    />
                                )}
                            </div>

                            {/* Right: Metadata Sidebar */}
                            <div className="w-full md:w-[400px] xl:w-[450px] bg-[#111111] shrink-0 flex flex-col h-full border-t md:border-t-0 md:border-l border-white/5 custom-scrollbar overflow-y-auto">
                                <div className="p-8 md:p-12 flex flex-col h-full justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-8 border border-primary/20">
                                            {selectedMedia.category || 'Portfolio'}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                                            {selectedMedia.title}
                                        </h2>

                                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent mb-8 rounded-full"></div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed"
                                    >
                                        {selectedMedia.description ? (
                                            <p className="text-base md:text-lg whitespace-pre-line">
                                                {selectedMedia.description}
                                            </p>
                                        ) : (
                                            <p className="italic text-gray-600">No additional details provided.</p>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
