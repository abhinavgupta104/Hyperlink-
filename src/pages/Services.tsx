import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MessageSquare, Smartphone, MessageCircle, Phone, KeyRound, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "bulk-sms",
    icon: MessageSquare,
    name: "Bulk SMS",
    tagline: "High-volume messaging at scale",
    description: "Send millions of messages with intelligent routing, carrier optimization, and real-time delivery tracking. Perfect for marketing campaigns, alerts, and notifications.",
    color: "sms",
    href: "/services/bulk-sms",
    features: [
      "Intelligent carrier routing",
      "Real-time delivery reports",
      "Template management",
      "Scheduled messaging",
      "DLT compliance built-in",
    ],
  },
  {
    id: "rcs",
    icon: Smartphone,
    name: "RCS Messaging",
    tagline: "Rich, interactive messaging",
    description: "Next-generation messaging with rich media, branded profiles, suggested actions, and carousel cards. The future of business messaging is here.",
    color: "rcs",
    href: "/services/rcs",
    features: [
      "Rich media support",
      "Branded business profiles",
      "Interactive buttons",
      "Carousel cards",
      "Read receipts",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    name: "WhatsApp Automation",
    tagline: "Business messaging automation",
    description: "Official WhatsApp Business API integration with template messaging, chatbot support, and customer engagement tools.",
    color: "whatsapp",
    href: "/services/whatsapp",
    features: [
      "Official API access",
      "Template messaging",
      "Chatbot integration",
      "Media sharing",
      "Customer support flows",
    ],
  },
  {
    id: "voice",
    icon: Phone,
    name: "Voice & IVR",
    tagline: "Automated voice solutions",
    description: "Programmable voice calls, interactive voice response systems, and call tracking for customer engagement and verification.",
    color: "voice",
    href: "/services/voice",
    features: [
      "Text-to-speech",
      "IVR builder",
      "Call recording",
      "DTMF input handling",
      "Call analytics",
    ],
  },
  {
    id: "otp",
    icon: KeyRound,
    name: "OTP & Transactional",
    tagline: "Secure verification messaging",
    description: "Lightning-fast OTP delivery with intelligent fallback, transactional notifications, and enterprise-grade security.",
    color: "otp",
    href: "/services/otp",
    features: [
      "Sub-second delivery",
      "Multi-channel fallback",
      "Auto-expiry management",
      "Fraud detection",
      "Rate limiting",
    ],
  },
  {
    id: "future",
    icon: Sparkles,
    name: "Future-Ready Services",
    tagline: "Next-generation messaging",
    description: "Stay ahead with emerging channels including Apple Business Chat, Google Business Messages, and new protocols as they become available.",
    color: "accent",
    href: "/contact",
    features: [
      "Early access program",
      "Beta testing opportunities",
      "Priority integration",
      "Dedicated support",
      "Custom development",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Enterprise Messaging Services
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed animate-fade-up stagger-1">
              Complete messaging infrastructure for every channel. Built for scale, 
              designed for compliance, optimized for reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={cn(
                    "card-enterprise p-8 md:p-10 hover:shadow-lg transition-shadow opacity-0 animate-fade-up"
                  )}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                          `bg-${service.color}/10`
                        )}>
                          <Icon className={cn("w-7 h-7", `text-${service.color}`)} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{service.name}</h2>
                          <p className="text-muted-foreground">{service.tagline}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-accent font-medium hover:underline group"
                      >
                        Explore {service.name}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Features */}
                    <div className="bg-secondary rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-enterprise text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our messaging experts can help you design the perfect solution for your business needs.
          </p>
          <Link to="/contact" className="btn-accent">
            Talk to an Expert
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
