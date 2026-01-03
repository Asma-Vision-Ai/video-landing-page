import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
          </div>
          <span className="hidden sm:inline">Sightline</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("what-are-egocentric")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            What is Egocentric Data
          </button>
          <button
            onClick={() => scrollToSection("datasets")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Datasets
          </button>
          <button
            onClick={() => scrollToSection("use-cases")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Pricing
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("cta")}
            className="bg-primary text-primary-foreground hover:bg-blue-600"
          >
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("what-are-egocentric")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-2"
            >
              What is Egocentric Data
            </button>
            <button
              onClick={() => scrollToSection("datasets")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-2"
            >
              Datasets
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-2"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-2"
            >
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-primary text-primary-foreground hover:bg-blue-600 w-full"
            >
              Request Access
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
