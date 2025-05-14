
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, CalendarDays, BookOpen, Info, Compass, Calendar, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="museum-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-museum-navy" />
            <span className="text-xl font-serif font-bold text-museum-navy">British Muse</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link to="/events" className="nav-link flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>Events</span>
            </Link>
            <Link to="/collections" className="nav-link flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>Collections</span>
            </Link>
            <Link to="/about" className="nav-link flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/virtual-tour" className="nav-link flex items-center gap-1">
              <Compass className="h-4 w-4" />
              <span>Virtual Tour</span>
            </Link>
            <Link to="/reserve" className="nav-link flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Reserve a Visit</span>
            </Link>
          </div>
          
          {/* Login Button (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Login / Sign up</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 pt-2 shadow-lg animate-fade-in border-t">
          <div className="museum-container space-y-3">
            <Link 
              to="/events" 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CalendarDays className="h-5 w-5 text-museum-navy" />
              <span>Events</span>
            </Link>
            <Link 
              to="/collections" 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-museum-navy" />
              <span>Collections</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info className="h-5 w-5 text-museum-navy" />
              <span>About</span>
            </Link>
            <Link 
              to="/virtual-tour" 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Compass className="h-5 w-5 text-museum-navy" />
              <span>Virtual Tour</span>
            </Link>
            <Link 
              to="/reserve" 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5 text-museum-navy" />
              <span>Reserve a Visit</span>
            </Link>
            <div className="pt-2 border-t">
              <Button 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                <span>Login / Sign up</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
