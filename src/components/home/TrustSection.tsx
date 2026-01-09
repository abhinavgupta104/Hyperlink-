import { Shield, Lock, FileCheck, Award, CheckCircle2 } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "DLT Registered",
    description: "Fully compliant with TRAI regulations and DLT requirements.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your data is encrypted in transit and at rest.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "Meeting international data protection standards.",
  },
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Enterprise-grade security certifications.",
  },
];

const stats = [
  { value: "10B+", label: "Messages Delivered" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "190+", label: "Countries Covered" },
  { value: "5000+", label: "Enterprise Clients" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-enterprise">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Security & Compliance Built-In
            </h2>
            <p className="text-primary-foreground/70">
              Enterprise messaging demands enterprise security. We exceed industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-primary-foreground/60">{point.description}</p>
                </div>
              );
            })}
          </div>

          {/* Compliance Badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["TRAI DLT", "GDPR", "ISO 27001", "SOC 2 Type II", "HIPAA"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-primary-foreground/60">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
