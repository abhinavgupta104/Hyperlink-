import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo-hyperlink-sms.png";
import { LegalModal } from "@/components/ui/LegalModal";
import { useState } from "react";

const footerLinks = {
  services: [
    { name: "Bulk SMS", href: "/services/bulk-sms" },
    { name: "RCS Messaging", href: "/services/rcs" },
    { name: "WhatsApp Automation", href: "/services/whatsapp" },
    { name: "Voice & IVR", href: "/services/voice" },
    { name: "OTP & Transactional", href: "/services/otp" },
  ],
  company: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Dashboard Overview", href: "/dashboard" },
    { name: "Security & Compliance", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
};

type LegalType = "privacy" | "terms" | "dlt" | "gdpr" | null;

export function Footer() {
  const [openLegal, setOpenLegal] = useState<LegalType>(null);

  return (
    <footer className="bg-primary text-primary-foreground transition-colors duration-300">
      <div className="container-enterprise section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <img src={logoImage} alt="Hyperlink SMS" className="h-8 w-auto" />
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise messaging infrastructure for businesses of all sizes. 
              Reliable, compliant, and built for scale.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@hyperlink.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                hello@hyperlink.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Enterprise Tower, Tech District
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setOpenLegal("privacy")}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenLegal("terms")}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenLegal("dlt")}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                >
                  DLT Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenLegal("gdpr")}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                >
                  GDPR
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Hyperlink SMS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/50 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <LegalModal
        type={openLegal}
        isOpen={openLegal !== null}
        onClose={() => setOpenLegal(null)}
      />
    </footer>
  );
}
