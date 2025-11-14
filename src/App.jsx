import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './Components/Common/ScrollToTop';

// Lazy load main components
const Homepage = React.lazy(() => import('./Components/Pages/Homepage'));
const Contact = React.lazy(() => import('./Components/Pages/Contact/Contact'));

// Legal Pages
const TermsConditions = React.lazy(() => import('./Components/Pages/Legal/TermsConditions'));
const PrivacyPolicy = React.lazy(() => import('./Components/Pages/Legal/PrivacyPolicy'));
const RefundPolicy = React.lazy(() => import('./Components/Pages/Legal/RefundPolicy'));

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
  </div>
);

// Page Transition Wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={
                <PageTransition>
                  <Homepage />
                </PageTransition>
              } />

              {/* Contact Route */}
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />

              {/* Legal Routes */}
              <Route path="/terms" element={
                <PageTransition>
                  <TermsConditions />
                </PageTransition>
              } />
              <Route path="/privacy" element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              } />
              <Route path="/refund" element={
                <PageTransition>
                  <RefundPolicy />
                </PageTransition>
              } />
            </Routes>
          </ScrollToTop>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;