import { useState } from "react";
import { BrookbushLogo } from "./brookbush-logo";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrookbushLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="https://brookbushinstitute.com" className="text-white hover:text-blue-200 transition-colors">
              Back To Main Site
            </a>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">English</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-500">
              <a
                href="https://brookbushinstitute.com"
                className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Back To Main Site
              </a>
              <div className="flex items-center px-3 py-2 space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
