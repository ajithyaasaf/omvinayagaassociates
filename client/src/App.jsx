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

// Pre-load critical pages for faster navigation
import HomePage from "./pages_jsx/HomePage.jsx";
import AboutPage from "./pages_jsx/AboutPage.jsx";
import ServicesPage from "./pages_jsx/ServicesPage.jsx";
import ProductsPage from "./pages_jsx/ProductsPage.jsx";
import ContactPage from "./pages_jsx/ContactPage.jsx";

// Lazy load less critical pages
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

  // Create a PageWrapper component for animations with 1-second minimum loading time
  const PageWrapper = ({ children }) => {
    const [showSpinner, setShowSpinner] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      // Minimum 1-second loading time
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (isReady) {
        setShowSpinner(false);
      }
    }, [isReady]);

    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="w-full"
      >
        {showSpinner ? (
          <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[60] flex items-center justify-center">
            <LoadingSpinner size="large" showText={true} variant="logo" />
          </div>
        ) : (
          <Suspense fallback={
            <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[60] flex items-center justify-center">
              <LoadingSpinner size="large" showText={true} variant="logo" />
            </div>
          }>
            {children}
          </Suspense>
        )}
      </motion.div>
    );
  };

  // Import the new professional loading spinner
  const BrandedLoadingSpinner = () => (
    <div 
      className="fixed inset-0 bg-white flex flex-col items-center justify-center" 
      style={{zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
    >
      <LoadingSpinner size="large" showText={true} variant="logo" />
    </div>
  );

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