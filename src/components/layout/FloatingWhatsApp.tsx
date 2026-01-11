import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Nucleus AI Contact Details
  const whatsappNumber = "919164933933";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in Nucleus AI messaging solutions. Please share more details."
  );

  const contactOptions = [
    {
      icon: MessageSquare,
      label: "WhatsApp",
      description: "Chat with us instantly",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      color: "bg-whatsapp",
    },
    {
      icon: Phone,
      label: "Call Us",
      description: "+919164933933",
      href: "tel:+919164933933",
      color: "bg-voice",
    },
    {
      icon: Mail,
      label: "Email",
      description: "hello@hyperlink.com",
      href: "mailto:hello@hyperlink.com",
      color: "bg-sms",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-card rounded-xl border border-border shadow-xl overflow-hidden animate-scale-in">
          <div className="p-4 bg-accent text-accent-foreground">
            <h3 className="font-semibold">Get in Touch</h3>
            <p className="text-sm opacity-80">
              Choose how you'd like to connect
            </p>
          </div>

          <div className="p-2">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.label === "WhatsApp" ? "_blank" : undefined}
                rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    option.color
                  )}
                >
                  <option.icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    {option.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105",
          isOpen
            ? "bg-foreground text-background rotate-90"
            : "bg-whatsapp text-white animate-pulse-soft"
        )}
        aria-label="Contact Nucleus AI"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Pulse Ring Animation */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
}
