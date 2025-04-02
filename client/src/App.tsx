import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CursorEffect from "@/components/CursorEffect";
import GlowingBackground from "@/components/GlowingBackground";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use a window load observer to reload interactive elements for cursor effect
  useEffect(() => {
    const refreshCursorElements = () => {
      const event = new CustomEvent('refresh-cursor-elements');
      window.dispatchEvent(event);
    };

    // Refresh when page loads fully
    if (document.readyState === 'complete') {
      refreshCursorElements();
    } else {
      window.addEventListener('load', refreshCursorElements);
    }

    // Refresh on resize as well (helps with dynamic content)
    window.addEventListener('resize', refreshCursorElements);

    // Set initial cursor visibility
    if (typeof window !== 'undefined') {
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('load', refreshCursorElements);
      window.removeEventListener('resize', refreshCursorElements);
      if (typeof window !== 'undefined') {
        document.body.style.cursor = 'auto';
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlowingBackground />
      <CursorEffect />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
