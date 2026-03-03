import React, { useState } from 'react';

import { Search, Download, Trash2, Eye, Filter, CalendarDays, X, ClipboardList } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AdminPagination from './AdminPagination';
import { formatDate, filterByDateRange, sortByDate, getPaginatedData } from '../../utils/adminUtils';
import { COMPANY_NAME } from '@/lib/constants';

const InquiriesView = ({ inquiries, isLoading, deleteInquiry }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState('desc');

    // Filter Data locally
    const filtered = Array.isArray(inquiries) ? inquiries.filter(inq => {
        if (!inq) return false;
        const searchString = `${inq.name} ${inq.phone} ${inq.email} ${inq.issueType} ${inq.message} ${inq.address}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    }) : [];

    const dateFiltered = filterByDateRange(filtered, startDate, endDate);
    const sorted = sortByDate(dateFiltered, sortOrder);
    const paginatedData = getPaginatedData(sorted, currentPage, itemsPerPage);

    // Update effect to reset page when filters change
    React.useEffect(() => { setCurrentPage(1); }, [searchTerm, startDate, endDate]);

    return (
        <div className="space-y-6">
            {/* Header and Controls */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <ClipboardList className="w-5 h-5" />
                            </span>
                            Quick Inquiries
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Manage general questions and modal popup leads.</p>
                    </div>

                    <div className="flex items-center gap-3">
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-center bg-gray-50/50 p-2 rounded-2xl border border-gray-100/50">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by name, phone, issue..."
                            className="pl-12 h-12 bg-white border-white shadow-sm rounded-xl focus-visible:ring-primary/20 w-full"
                        />
                        {searchTerm && (
                            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <div className="flex gap-2 w-full lg:w-auto">
                        <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" className={`h-12 px-5 rounded-xl border-white shadow-sm bg-white ${startDate || endDate ? 'text-primary border-primary/20' : 'text-gray-600'}`}>
                                    <Filter className="w-4 h-4 mr-2" />
                                    {startDate || endDate ? 'Filtered' : 'Filter Date'}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md rounded-3xl p-6">
                                <DialogHeader>
                                    <DialogTitle className="text-xl">Filter by Date Range</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Start Date</label>
                                        <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="rounded-xl h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">End Date</label>
                                        <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="rounded-xl h-12" />
                                    </div>
                                </div>
                                <DialogFooter className="gap-2 sm:gap-0">
                                    <Button variant="ghost" onClick={() => { setStartDate(''); setEndDate(''); }} className="rounded-xl">Clear</Button>
                                    <Button onClick={() => setIsFilterOpen(false)} className="rounded-xl bg-gray-900">Apply Filters</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <Button variant="outline" onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')} className="h-12 px-5 rounded-xl border-white shadow-sm bg-white text-gray-600">
                            <CalendarDays className="w-4 h-4 mr-2" /> {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 rounded-full border-4 border-gray-100 border-t-primary animate-spin mb-4" />
                        <p className="text-gray-500 font-medium">Loading inquiries...</p>
                    </div>
                ) : paginatedData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                            <ClipboardList className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">No Inquiries Found</h3>
                        <p className="text-gray-500 max-w-sm">There are no inquiry records matching your current search or filter criteria.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50/80 text-gray-500 font-semibold uppercase tracking-wider text-[11px] border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 rounded-tl-3xl">Customer</th>
                                    <th className="px-6 py-4">Contact</th>
                                    <th className="px-6 py-4">Issue Type</th>
                                    <th className="px-6 py-4">Date Submited</th>
                                    <th className="px-6 py-4 text-center rounded-tr-3xl">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {paginatedData.map((inquiry, idx) => (
                                    <tr key={inquiry.id || idx} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                                    {inquiry.name?.charAt(0).toUpperCase() || '?'}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{inquiry.name}</div>
                                                    <div className="text-xs text-gray-500 max-w-[150px] truncate">{inquiry.address || 'No Address'}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{inquiry.phone}</div>
                                            <div className="text-xs text-gray-500">{inquiry.email || 'No email'}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                                                {inquiry.issueType || 'General'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 font-medium">
                                            {inquiry.createdAt ? formatDate(inquiry.createdAt) : 'Recent'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-2xl rounded-3xl p-8">
                                                        <DialogHeader className="mb-6">
                                                            <DialogTitle className="text-2xl flex items-center gap-3">
                                                                <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                                                                    {inquiry.name?.charAt(0).toUpperCase()}
                                                                </span>
                                                                {inquiry.name}'s Inquiry
                                                            </DialogTitle>
                                                        </DialogHeader>
                                                        <div className="grid grid-cols-2 gap-6">
                                                            <div className="space-y-1 bg-gray-50 p-4 rounded-2xl">
                                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                                                <p className="font-semibold text-gray-900">{inquiry.phone}</p>
                                                            </div>
                                                            <div className="space-y-1 bg-gray-50 p-4 rounded-2xl">
                                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                                                <p className="font-semibold text-gray-900">{inquiry.email || 'None provided'}</p>
                                                            </div>
                                                            <div className="space-y-1 bg-gray-50 p-4 rounded-2xl">
                                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Issue Type</label>
                                                                <p className="font-semibold text-gray-900">{inquiry.issueType || 'General Inquiry'}</p>
                                                            </div>
                                                            <div className="space-y-1 bg-gray-50 p-4 rounded-2xl">
                                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</label>
                                                                <p className="font-semibold text-gray-900">{inquiry.address || 'None provided'}</p>
                                                            </div>
                                                            <div className="col-span-2 space-y-1 bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
                                                                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider">Message Content</label>
                                                                <p className="font-medium text-gray-900 whitespace-pre-wrap">{inquiry.message || 'No message provided.'}</p>
                                                            </div>
                                                        </div>
                                                        <DialogFooter className="mt-8 border-t border-gray-100 pt-6">
                                                            <AlertDialog>
                                                                <AlertDialogTrigger asChild>
                                                                    <Button variant="destructive" className="rounded-xl px-6">Delete Record</Button>
                                                                </AlertDialogTrigger>
                                                                <AlertDialogContent className="rounded-3xl p-6">
                                                                    <AlertDialogHeader>
                                                                        <AlertDialogTitle>Delete this inquiry?</AlertDialogTitle>
                                                                        <AlertDialogDescription>This action cannot be undone and will permanently remove this record from the database.</AlertDialogDescription>
                                                                    </AlertDialogHeader>
                                                                    <AlertDialogFooter>
                                                                        <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                                                                        <AlertDialogAction onClick={() => deleteInquiry(inquiry.id)} className="rounded-xl bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                                                                    </AlertDialogFooter>
                                                                </AlertDialogContent>
                                                            </AlertDialog>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg">
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent className="rounded-3xl p-6">
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Delete this inquiry?</AlertDialogTitle>
                                                            <AlertDialogDescription>This action cannot be undone. Are you sure you wish to delete {inquiry.name}'s inquiry?</AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => deleteInquiry(inquiry.id)} className="rounded-xl bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {sorted.length > 0 && (
                <AdminPagination
                    totalItems={sorted.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setItemsPerPage={setItemsPerPage}
                />
            )}
        </div>
    );
};

export default InquiriesView;
