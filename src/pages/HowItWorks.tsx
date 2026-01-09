import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Settings, 
  Send, 
  BarChart3, 
  Shield, 
  Workflow,
  CheckCircle2,
  Building2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Onboarding & Verification",
    description: "We verify your business identity and set up your account with the appropriate permissions and capabilities.",
    details: [
      "Business identity verification",
      "KYC/AML compliance checks",
      "Account provisioning",
      "Team access setup",
    ],
    handled: "hyperlink",
  },
  {
    number: "02",
    icon: Shield,
    title: "Compliance Setup",
    description: "Hyperlink handles DLT registration, sender ID approval, and all regulatory requirements on your behalf.",
    details: [
      "DLT Principal Entity registration",
      "Sender ID procurement and approval",
      "Template registration",
      "Carrier onboarding",
    ],
    handled: "hyperlink",
  },
  {
    number: "03",
    icon: Settings,
    title: "System Configuration",
    description: "Configure your messaging preferences, integrations, and automation rules through our dashboard or API.",
    details: [
      "API integration",
      "Webhook configuration",
      "Automation rules setup",
      "Template creation",
    ],
    handled: "both",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Campaign Creation",
    description: "Create and configure your messaging campaigns with audience targeting, scheduling, and delivery optimization.",
    details: [
      "Audience segmentation",
      "Message personalization",
      "Schedule optimization",
      "A/B testing setup",
    ],
    handled: "customer",
  },
  {
    number: "05",
    icon: Send,
    title: "Intelligent Delivery",
    description: "Hyperlink's routing engine optimizes delivery across carriers with real-time tracking and automatic retries.",
    details: [
      "Smart carrier routing",
      "Real-time delivery tracking",
      "Automatic retry logic",
      "Fallback channel handling",
    ],
    handled: "hyperlink",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Analytics & Optimization",
    description: "Monitor performance, analyze engagement, and continuously optimize your messaging strategy.",
    details: [
      "Real-time dashboards",
      "Delivery analytics",
      "Engagement metrics",
      "Cost optimization insights",
    ],
    handled: "both",
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              How Hyperlink Works
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed animate-fade-up stagger-1">
              A clear, step-by-step process from onboarding to optimized delivery. 
              We handle the complexity so you can focus on your message.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="card-enterprise p-8 md:p-10 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2">
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6">
                      <h2 className="text-2xl font-bold text-foreground mb-3">{step.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      
                      {/* Responsibility Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm">
                        {step.handled === "hyperlink" && (
                          <>
                            <Building2 className="w-4 h-4 text-accent" />
                            <span className="text-foreground font-medium">Handled by Hyperlink</span>
                          </>
                        )}
                        {step.handled === "customer" && (
                          <>
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground font-medium">Customer Action</span>
                          </>
                        )}
                        {step.handled === "both" && (
                          <>
                            <span className="flex -space-x-1">
                              <Building2 className="w-4 h-4 text-accent" />
                              <Users className="w-4 h-4 text-muted-foreground" />
                            </span>
                            <span className="text-foreground font-medium">Collaborative</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-4">
                      <div className="bg-secondary rounded-xl p-5">
                        <h3 className="font-semibold text-foreground mb-3 text-sm">What happens:</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team will guide you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-accent">
              Request Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
