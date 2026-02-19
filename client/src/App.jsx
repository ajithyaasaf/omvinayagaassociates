import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsappButton from "./components/WhatsappButton";
import HomePageForm from "./components/HomePageForm";
import ExitIntentPopup from "./components/ExitIntentPopup";
import ChatBot from "./components/chat/ChatBot";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import { pageTransition } from "./utils/animations";

// Lazy load all pages for better code splitting and initial load performance
const HomePage = lazy(() => import("./pages_jsx/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages_jsx/AboutPage.jsx"));
const ServicesPage = lazy(() => import("./pages_jsx/ServicesPage.jsx"));
const ProductsPage = lazy(() => import("./pages_jsx/ProductsPage.jsx"));
const ContactPage = lazy(() => import("./pages_jsx/ContactPage.jsx"));
const ProductDetailPage = lazy(() => import("./pages_jsx/ProductDetailPage.jsx"));
const AchievementsPage = lazy(() => import("./pages_jsx/AchievementsPage.jsx"));
const KavashPage = lazy(() => import("./pages_jsx/KavashPage.jsx"));
const AdminPage = lazy(() => import("./pages_jsx/AdminPage.jsx"));
const NotFound = lazy(() => import("./pages/not-found.jsx"));

function App() {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // PageWrapper for animations
  const PageWrapper = ({ children }) => {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="w-full"
      >
        <Suspense fallback={
          <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[60] flex items-center justify-center">
            <LoadingSpinner size="large" showText={true} variant="logo" />
          </div>
        }>
          {children}
        </Suspense>
      </motion.div>
    );
  };

  // Show the popup form only on the homepage
  const showPopupForm = location === "/";

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow w-full overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Switch key={location} location={location}>
            <Route path="/">
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            </Route>
            <Route path="/services">
              <PageWrapper>
                <ServicesPage />
              </PageWrapper>
            </Route>
            <Route path="/products">
              <PageWrapper>
                <ProductsPage />
              </PageWrapper>
            </Route>
            <Route path="/products/:id">
              {(params) => (
                <PageWrapper>
                  <ProductDetailPage params={params} />
                </PageWrapper>
              )}
            </Route>
            <Route path="/about">
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            </Route>
            <Route path="/contact">
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            </Route>
            <Route path="/achievements">
              <PageWrapper>
                <AchievementsPage />
              </PageWrapper>
            </Route>
            <Route path="/kavash">
              <PageWrapper>
                <KavashPage />
              </PageWrapper>
            </Route>
            <Route path="/admin">
              <PageWrapper>
                <AdminPage />
              </PageWrapper>
            </Route>
            <Route>
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsappButton />
      {showPopupForm && <HomePageForm />}
      <ExitIntentPopup />
      <ChatBot />

      <Toaster />
    </div>
  );
}

export default App;