import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Shield, Lock, Users, Loader2, Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { COMPANY_NAME } from "@/lib/constants";

// Import new modular Admin components
import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardOverview from "../components/admin/DashboardOverview";
import InquiriesView from "../components/admin/InquiriesView";
import ContactsView from "../components/admin/ContactsView";
import IntentsView from "../components/admin/IntentsView";
import ProductManager from "../components/admin/ProductManager";
import GalleryManager from "../components/admin/GalleryManager";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "buildingdoctor2026";

const AdminPage = () => {
  const [location, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("admin_authenticated", "true");
      toast({ title: "Login successful", description: "Welcome to the admin dashboard." });
    } else {
      toast({ title: "Login failed", description: "Invalid username or password.", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_authenticated");
    toast({ title: "Logged out", description: "You have been logged out successfully." });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Data Fetching
  const fetchTabData = (endpoint) => async () => {
    try {
      const res = await apiRequest("GET", `/api/${endpoint}`);
      const json = await res.json();

      // Handle the various response shapes the API might return
      if (Array.isArray(json)) return json;
      if (json && json.data && Array.isArray(json.data)) return json.data;
      if (json && json[endpoint] && Array.isArray(json[endpoint])) return json[endpoint];
      if (json && typeof json === 'object') {
        // fallback search for arrays in the object
        for (const val of Object.values(json)) {
          if (Array.isArray(val)) return val;
        }
      }
      return [];
    } catch (error) {
      console.error(`Failed to fetch ${endpoint}:`, error);
      return [];
    }
  };

  const { data: inquiries = [], isLoading: isInquiriesLoading, refetch: refetchInquiries } = useQuery({
    queryKey: ["inquiries"], queryFn: fetchTabData("inquiries"), enabled: isAuthenticated, staleTime: 0, refetchInterval: 2000,
  });

  const { data: contactSubmissions = [], isLoading: isContactsLoading, refetch: refetchContacts } = useQuery({
    queryKey: ["contacts"], queryFn: fetchTabData("contacts"), enabled: isAuthenticated, staleTime: 0, refetchInterval: 2000,
  });

  const { data: intentSubmissions = [], isLoading: isIntentsLoading, refetch: refetchIntents } = useQuery({
    queryKey: ["intents"], queryFn: fetchTabData("intents"), enabled: isAuthenticated, staleTime: 0, refetchInterval: 2000,
  });

  // Mutations
  const createDeleteMutation = (endpoint, queryKey) => useMutation({
    mutationFn: async (id) => {
      const parsedId = typeof id === "string" && id.includes("-") ? parseInt(id.split("-")[1] || id.replace(/[^\d]/g, '')) : parseInt(id);
      const response = await apiRequest("DELETE", `/api/${endpoint}?id=${parsedId}`);
      return { id: parsedId, response };
    },
    onSuccess: (data) => {
      queryClient.setQueryData([queryKey], (old) => old ? old.filter((item) => item.id !== data.id) : []);
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast({ title: "Record deleted", description: "The submission has been removed successfully." });
    },
    onError: (error) => {
      console.error(`Error deleting from ${endpoint}:`, error);
      toast({ title: "Failed to delete", description: "There was an error deleting the record.", variant: "destructive" });
    },
  });

  const deleteInquiryMutation = createDeleteMutation("inquiries", "inquiries");
  const deleteContactMutation = createDeleteMutation("contacts", "contacts");
  const deleteIntentMutation = createDeleteMutation("intents", "intents");

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-gray-50 to-gray-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: "spring" }}
          className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white max-w-md w-full relative z-10"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 border border-white/20">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Admin Portal Login</h1>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{COMPANY_NAME}</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-4">
              <div className="relative group">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <Input type="text" name="username" placeholder="username" className="pl-12 h-14 bg-gray-50/50 border-gray-100 rounded-2xl focus-visible:ring-primary/20 focus-visible:bg-white transition-all font-medium" value={credentials.username} onChange={handleChange} required />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="pl-12 pr-12 h-14 bg-gray-50/50 border-gray-100 rounded-2xl focus-visible:ring-primary/20 focus-visible:bg-white transition-all font-medium"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full h-14 mt-8 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl text-base font-bold shadow-lg shadow-gray-900/20 transition-all active:scale-[0.98]">
              Authenticate Securely
            </Button>
          </form>
          <div className="mt-8 text-center">
            <Link href="/"><button className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Return to Site</button></Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard Layout
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden w-full m-0 p-0 absolute inset-0 z-50">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogout} />

      <main className="flex-1 h-full overflow-y-auto relative scrollbar-hide pt-16 lg:pt-0">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTab === "dashboard" && (
                <DashboardOverview inquiries={inquiries} contacts={contactSubmissions} intents={intentSubmissions} />
              )}
              {activeTab === "inquiries" && (
                <InquiriesView inquiries={inquiries} isLoading={isInquiriesLoading} deleteInquiry={deleteInquiryMutation.mutate} />
              )}
              {activeTab === "contacts" && (
                <ContactsView contacts={contactSubmissions} isLoading={isContactsLoading} deleteContact={deleteContactMutation.mutate} />
              )}
              {activeTab === "intents" && (
                <IntentsView intents={intentSubmissions} isLoading={isIntentsLoading} deleteIntent={deleteIntentMutation.mutate} />
              )}
              {activeTab === "products" && (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-6 overflow-x-hidden">
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Product Lineup Master</h2>
                    <p className="text-gray-500 text-sm mt-1">Add, update, and manage your e-commerce product listings.</p>
                  </div>
                  <ProductManager />
                </div>
              )}
              {activeTab === "gallery" && (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-6 overflow-x-hidden">
                  <GalleryManager />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
