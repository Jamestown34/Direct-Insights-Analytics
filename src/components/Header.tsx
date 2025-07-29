import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="w-full px-6 py-4 bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <span
          onClick={handleHomeClick}
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          Direct Insights Technologies
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <span
            onClick={handleHomeClick}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </span>

          {isHome && (
            <>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors">
                Cases
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </>
          )}

          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfpDLExZBa4Ssw6hTM09-PszkikdtnXHwNBCtRFEMs8sUYZuw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <Button variant="default">Let's talk</Button>
        </a>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-background shadow">
          <nav className="flex flex-col space-y-4">
            <span
              onClick={() => {
                handleHomeClick();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Home
            </span>

            {isHome && (
              <>
                <a href="#cases" onClick={() => setIsOpen(false)}>Cases</a>
                <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
              </>
            )}

            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpDLExZBa4Ssw6hTM09-PszkikdtnXHwNBCtRFEMs8sUYZuw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="default" className="w-full">Let's talk</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
