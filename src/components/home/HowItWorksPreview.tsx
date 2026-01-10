import { Link } from "react-router-dom";
import { ArrowRight, Settings, Workflow, Send, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Setup & Integration",
    description: "Connect your systems via API or dashboard. We handle DLT registration and carrier connections.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Configure Campaigns",
    description: "Create message templates, set up automation rules, and configure delivery preferences.",
  },
  {
    icon: Send,
    number: "03",
    title: "Launch & Deliver",
    description: "Hyperlink routes your messages through optimal paths with real-time carrier optimization.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Monitor & Optimize",
    description: "Track delivery rates, engagement metrics, and costs. Get actionable insights.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="section-padding bg-secondary transition-colors duration-300">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Hyperlink Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From setup to scale. A clear process with complete visibility at every step.
          </p>
        </div>

        {/* Connected Flowchart */}
        <div className="relative">
          {/* Animated Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-1 -translate-y-1/2 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-sky via-accent to-brand-gold opacity-30" />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-brand-sky via-accent to-brand-gold"
              style={{
                maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                animation: 'connectorFlow 3s ease-in-out infinite',
              }}
            />
          </div>

          {/* Vertical Connector - Mobile */}
          <div className="lg:hidden absolute left-8 top-20 bottom-20 w-1 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-sky via-accent to-brand-gold opacity-30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={cn(
                    "relative group opacity-0 animate-fade-up",
                  )}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  {/* Node Connector Dot */}
                  <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border relative overflow-hidden transition-all duration-500 hover:shadow-glow hover:-translate-y-2 group-hover:border-accent/50">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-accent to-brand-magenta text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon with animation */}
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 mt-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/10">
                      <Icon className="w-7 h-7 text-foreground transition-colors group-hover:text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-foreground mb-2 transition-colors group-hover:text-accent">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/how-it-works" className="btn-primary group">
            See Detailed Process
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
