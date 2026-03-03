import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    ClipboardList,
    MessageSquare,
    AlertCircle,
    Package,
    Shield,
    LogOut,
    ChevronRight,
    UserCircle,
    Menu,
    X as CloseIcon,
    Image as ImageIcon
} from 'lucide-react';
import { COMPANY_NAME } from '@/lib/constants';

const AdminSidebar = ({ activeTab, setActiveTab, handleLogout }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Close sidebar on mobile when tab changes
    useEffect(() => {
        setIsMobileOpen(false);
    }, [activeTab]);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'inquiries', label: 'Inquiries', icon: ClipboardList },
        { id: 'contacts', label: 'Contacts', icon: MessageSquare },
        { id: 'intents', label: 'Exit Intents', icon: AlertCircle },
        { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    ];

    const SidebarContent = () => (
        <>
            {/* Brand Header */}
            <div className="h-20 lg:h-24 flex items-center px-6 lg:px-8 border-b border-gray-100/80 bg-white/50 backdrop-blur-xl shrink-0">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 border border-white/20">
                            <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-base lg:text-lg tracking-tight leading-tight">Admin Portal</span>
                        <span className="text-[10px] lg:text-[11px] font-semibold text-primary uppercase tracking-widest">{COMPANY_NAME || 'Control Panel'}</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 lg:py-8 px-3 lg:px-4 flex flex-col gap-1.5 lg:gap-2 scrollbar-hide">
                <div className="text-[10px] lg:text-xs font-bold text-gray-400 mb-1 lg:mb-2 px-4 uppercase tracking-[0.2em]">Menu</div>

                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 lg:gap-4 px-4 py-3 lg:py-3.5 rounded-xl lg:rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-bg"
                                    className="absolute inset-0 bg-primary rounded-xl lg:rounded-2xl -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div className={`flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-primary/70'}`} strokeWidth={isActive ? 2.5 : 2} />
                            </div>

                            <span className={`font-medium text-sm lg:text-[15px] z-10 transition-all duration-300 ${isActive ? 'font-semibold tracking-wide' : ''}`}>
                                {item.label}
                            </span>

                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="ml-auto"
                                >
                                    <ChevronRight className="w-4 h-4 text-white/70" />
                                </motion.div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Footer Profile / Logout */}
            <div className="p-4 lg:p-6 border-t border-gray-100 bg-gray-50/30 shrink-0">
                <div className="flex items-center gap-3 mb-4 lg:mb-6 px-2">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <UserCircle className="w-full h-full text-gray-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-gray-900 truncate">Administrator</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 lg:py-3 rounded-lg lg:rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all duration-300 group shadow-sm"
                >
                    <LogOut className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                    <span className="font-semibold text-sm">Sign Out</span>
                </button>

                <div className="mt-6 text-center">
                    <a
                        href="https://godivatech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-gray-400 hover:text-primary transition-colors duration-300 uppercase tracking-[0.2em] inline-flex items-center gap-1 group"
                    >
                        Developed by
                        <span className="text-gray-500 group-hover:text-primary underline decoration-gray-200 group-hover:decoration-primary/30 underline-offset-4">Godivatech</span>
                    </a>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Header Toggle */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40 flex items-center justify-between px-4 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
                        <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Admin Portal</span>
                </div>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 -mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    {isMobileOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <motion.div
                className={`fixed lg:sticky top-0 left-0 h-[100dvh] w-[280px] lg:w-72 bg-white border-r border-gray-100 flex flex-col shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-50 transform transition-transform duration-300 ease-in-out lg:transform-none ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <SidebarContent />
            </motion.div>
        </>
    );
};

export default AdminSidebar;
