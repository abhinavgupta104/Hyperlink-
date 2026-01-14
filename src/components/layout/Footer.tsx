import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo-hyperlink-sms.png";
import { LegalModal } from "@/components/ui/LegalModal";
import { useState } from "react";
import { FooterTextGlitch } from "@/components/ui/FooterTextGlitch";

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
                <img
                  src={logoImage}
                  alt="Nucleus AI"
                  className="h-8 w-auto"
                />
              </div>
            </Link>

            {/* Company Name with Glitch Effect */}
            <div className="mb-6">
              <FooterTextGlitch 
                text="Nucleus AI" 
                hoverText="NUCLEUS AI"
                size="xl"
                delay={0.1}
              />
            </div>

            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise messaging infrastructure for businesses of all sizes.
              Reliable, compliant, and built for scale.
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@hyperlink.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@hyperlink.com
              </a>

              <a
                href="tel:+919739175550"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 97391 75550
              </a>

              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  D-9, Vyapar Marg, Sector 3,<br />
                  Noida, Uttar Pradesh – 201301, India
                </span>
              </div>
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
              {["privacy", "terms", "dlt", "gdpr"].map((type) => (
                <li key={type}>
                  <button
                    onClick={() => setOpenLegal(type as LegalType)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {type === "privacy"
                      ? "Privacy Policy"
                      : type === "terms"
                      ? "Terms of Service"
                      : type.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Nucleus AI. All rights reserved.
            </p>

            <span className="text-xs text-primary-foreground/50">
              GSTIN: 09AAYFN8401A1Z4
            </span>

            <span className="text-xs text-primary-foreground/50 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All Systems Operational
            </span>
          </div>

          {/* Developer Credit */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2">
              <span className="text-sm text-primary-foreground/50">
                Developed by
              </span>
              <FooterTextGlitch
                text="Abhinav Gupta and Sarthak Gupta"
                hoverText="ABHINAV GUPTA AND SARTHAK GUPTA"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>

      <LegalModal
        type={openLegal}
        isOpen={openLegal !== null}
        onClose={() => setOpenLegal(null)}
      />
    </footer>
  );
}