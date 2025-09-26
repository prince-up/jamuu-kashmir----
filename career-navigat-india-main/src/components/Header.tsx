import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { BookOpen, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Get current user on mount
    supabase.auth.getSession().then(({ data }) => {
      setUserEmail(data.session?.user?.email || null);
    });
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Margdashrshan J&K
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {userEmail ? (
            <span className="hidden md:flex items-center px-3 py-1 rounded bg-muted text-foreground text-sm font-medium border border-border">
              <User className="h-4 w-4 mr-2" />
              {userEmail}
            </span>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => setShowLoginModal(true)}
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          )}
          <Button variant="default" size="sm" asChild>
            <Link to="/onboarding">
              Get Started
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;