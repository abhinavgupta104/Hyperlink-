import { Link } from "react-router-dom";
import { MessageSquare, Smartphone, MessageCircle, Phone, KeyRound, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "bulk-sms",
    icon: MessageSquare,
    name: "Bulk SMS",
    description: "High-volume messaging at scale with intelligent routing and delivery optimization.",
    color: "sms",
    href: "/services/bulk-sms",
  },
  {
    id: "rcs",
    icon: Smartphone,
    name: "RCS Messaging",
    description: "Rich, interactive messages with branding, buttons, and multimedia capabilities.",
    color: "rcs",
    href: "/services/rcs",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    name: "WhatsApp Automation",
    description: "Business messaging automation with templates, chatbots, and customer engagement.",
    color: "whatsapp",
    href: "/services/whatsapp",
  },
  {
    id: "voice",
    icon: Phone,
    name: "Voice & IVR",
    description: "Automated voice calls, interactive voice response, and call tracking solutions.",
    color: "voice",
    href: "/services/voice",
  },
  {
    id: "otp",
    icon: KeyRound,
    name: "OTP & Transactional",
    description: "Secure verification codes and transactional notifications with instant delivery.",
    color: "otp",
    href: "/services/otp",
  },
  {
    id: "future",
    icon: Sparkles,
    name: "Future-Ready",
    description: "Stay ahead with emerging messaging channels and next-generation protocols.",
    color: "accent",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-enterprise">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Messaging Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            Every channel your business needs. One platform. Full compliance. 
            Enterprise reliability at every scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.href}
                className={cn(
                  "group card-enterprise hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                  "opacity-0 animate-fade-up"
                )}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  `bg-${service.color}/10`
                )}>
                  <Icon className={cn("w-6 h-6", `text-${service.color}`)} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
