import { BrookbushLogo } from "./brookbush-logo";
import { Globe, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrookbushLogo />
          
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
        </div>
      </div>
    </header>
  );
}
