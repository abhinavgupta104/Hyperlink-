import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Bulk SMS", href: "/services/bulk-sms", description: "High-volume messaging at scale" },
  { name: "RCS Messaging", href: "/services/rcs", description: "Rich, interactive messaging" },
  { name: "WhatsApp Automation", href: "/services/whatsapp", description: "Business messaging automation" },
  { name: "Voice & IVR", href: "/services/voice", description: "Automated voice solutions" },
  { name: "OTP & Transactional", href: "/services/otp", description: "Secure verification messaging" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Security", href: "/security" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container-enterprise">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-foreground">Hyperlink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive("/") ? "text-accent" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                  location.pathname.includes("/services") ? "text-accent" : "text-muted-foreground"
                )}
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl border border-border shadow-xl p-2 animate-fade-in"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors mb-1"
                  >
                    <span className="text-sm font-semibold text-foreground">All Services</span>
                    <p className="text-xs text-muted-foreground mt-0.5">View all messaging solutions</p>
                  </Link>
                  <div className="h-px bg-border my-1" />
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground">{service.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(link.href) ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-outline text-sm py-2 px-4">
              Contact Sales
            </Link>
            <Link to="/contact" className="btn-accent text-sm py-2 px-4">
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href) ? "bg-secondary text-accent" : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                >
                  {service.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="px-4 flex flex-col gap-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-outline text-sm py-2 text-center">
                  Contact Sales
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-accent text-sm py-2 text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
