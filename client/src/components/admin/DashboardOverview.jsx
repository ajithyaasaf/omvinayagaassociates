import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, MessageSquare, AlertCircle, TrendingUp, Calendar, Users } from 'lucide-react';

const StatCard = ({ title, total, today, icon: Icon, colorClass, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group"
    >
        <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500 ${colorClass}`} />

        <div className="flex items-start justify-between relative z-10">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/80 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
                </div>

                <div className="flex items-baseline gap-3">
                    <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">{total}</h3>
                    <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" />
                        <span>+{today} Today</span>
                    </div>
                </div>
            </div>

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${colorClass}`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
        </div>

    </motion.div>
);

const DashboardOverview = ({ inquiries = [], contacts = [], intents = [] }) => {
    const getTodayCount = (dataArray) => {
        if (!Array.isArray(dataArray)) return 0;
        const today = new Date().toDateString();
        return dataArray.filter(item => new Date(item.createdAt).toDateString() === today).length;
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight capitalize">Welcome Back, Admin</h1>
                <p className="text-gray-500 text-base font-medium">Here's what's happening with your forms and inquiries today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <StatCard
                    title="Quick Inquiries"
                    total={Array.isArray(inquiries) ? inquiries.length : 0}
                    today={getTodayCount(inquiries)}
                    icon={ClipboardList}
                    colorClass="bg-blue-600 shadow-blue-600/20"
                    delay={0.1}
                />
                <StatCard
                    title="Contact Form Submissions"
                    total={Array.isArray(contacts) ? contacts.length : 0}
                    today={getTodayCount(contacts)}
                    icon={MessageSquare}
                    colorClass="bg-indigo-600 shadow-indigo-600/20"
                    delay={0.2}
                />
                <StatCard
                    title="Exit Intents Captured"
                    total={Array.isArray(intents) ? intents.length : 0}
                    today={getTodayCount(intents)}
                    icon={AlertCircle}
                    colorClass="bg-purple-600 shadow-purple-600/20"
                    delay={0.3}
                />
            </div>

            <div className="mt-8 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl text-white text-center">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                    <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </span>
                    <div>
                        <h4 className="text-xl font-bold tracking-tight">Designed and Developed by</h4>
                        <p className="text-primary font-black text-2xl mt-1 tracking-wider uppercase">Godivatech</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
