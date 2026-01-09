import { Link } from "react-router-dom";
import { ArrowRight, Settings, Workflow, Send, BarChart3 } from "lucide-react";

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
    <section className="section-padding bg-secondary">
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

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative bg-card rounded-xl p-6 border border-border opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 mt-2">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="btn-primary">
            See Detailed Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
