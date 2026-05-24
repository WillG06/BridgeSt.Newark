import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Home from "./routes/index";
import About from "./routes/about";
import BridgeStreet from "./routes/bridge-street";
import Contact from "./routes/contact";
import Heritage from "./routes/heritage";
import Portfolio from "./routes/portfolio";
import Pricing from "./routes/pricing";
import Residences from "./routes/residences";
import NotFound from "./NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bridge-street" element={<BridgeStreet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}