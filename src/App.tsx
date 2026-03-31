import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Projects from "@/pages/Projects";
import Team from "@/pages/Team";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Hackathons from "@/pages/Hackathons";
import Community from "@/pages/Community";
import Blog from "@/pages/Blog";
import Careers from "@/pages/Careers";
import Legal from "@/pages/Legal";
import CustomCursor from "@/components/ui/CustomCursor";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/community" element={<PageWrapper><Community /></PageWrapper>} />
            <Route path="/hackathons" element={<PageWrapper><Hackathons /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><Legal /></PageWrapper>} />
            <Route path="/terms-&-conditions" element={<PageWrapper><Legal /></PageWrapper>} />
            <Route path="/code-of-conduct" element={<PageWrapper><Legal /></PageWrapper>} />
            <Route path="/community-guidelines" element={<PageWrapper><Legal /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
