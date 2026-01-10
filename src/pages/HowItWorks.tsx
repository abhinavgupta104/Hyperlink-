import { useState } from "react";
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
  Building2,
  Clock,
  AlertTriangle,
  LucideIcon
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface StepData {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  handled: "hyperlink" | "customer" | "both";
  fullDetails: {
    whatIsThis: string;
    whyExists: string;
    beforeStep: string;
    afterStep: string;
    hyperlinkHandles: string[];
    customerHandles: string[];
    compliance: string[];
    timeline: string;
    failures: string;
  };
}

const steps: StepData[] = [
  {
    number: "01",
    icon: Users,
    title: "Onboarding & Verification",
    subtitle: "Account Setup",
    description: "We verify your business identity and set up your account with the appropriate permissions and capabilities.",
    details: [
      "Business identity verification",
      "KYC/AML compliance checks",
      "Account provisioning",
      "Team access setup",
    ],
    handled: "hyperlink",
    fullDetails: {
      whatIsThis: "The onboarding process is your first step with Hyperlink. We collect essential business information, verify your identity through KYC checks, and set up your organization's messaging account with appropriate permissions.",
      whyExists: "Proper onboarding ensures regulatory compliance, enables carrier trust scoring, and allows for accurate billing and reporting. It's required by telecom regulations to verify message senders before they can access enterprise messaging services.",
      beforeStep: "You've decided to use Hyperlink for enterprise messaging and are ready to begin the partnership process.",
      afterStep: "Your business profile is active, team members have dashboard access, and you can proceed to compliance setup.",
      hyperlinkHandles: [
        "Account creation and verification workflow",
        "KYC document validation and processing",
        "Business profile setup in our systems",
        "Dashboard access provisioning for your team",
        "Initial API credentials generation",
        "Dedicated account manager assignment",
      ],
      customerHandles: [
        "Provide accurate business documentation (GST, PAN, incorporation docs)",
        "Verify company email and phone numbers",
        "Review and accept terms of service",
        "Designate team members for dashboard access",
        "Complete authorized signatory verification",
      ],
      compliance: [
        "Business verification is mandatory under TRAI guidelines",
        "KYC documents must match registered business entity exactly",
        "GSTIN validation required for all Indian businesses",
        "Authorized signatory must be verified for enterprise accounts",
      ],
      timeline: "Typically 1-2 business days for standard verification. Same-day for pre-verified enterprises with complete documentation.",
      failures: "If verification fails, you'll receive specific feedback on what documentation is needed. Common issues include document mismatches or missing authorized signatory verification. Most issues are resolved within 24 hours with proper documentation.",
    },
  },
  {
    number: "02",
    icon: Shield,
    title: "Compliance Setup",
    subtitle: "DLT & Regulatory",
    description: "Hyperlink handles DLT registration, sender ID approval, and all regulatory requirements on your behalf.",
    details: [
      "DLT Principal Entity registration",
      "Sender ID procurement and approval",
      "Template registration",
      "Carrier onboarding",
    ],
    handled: "hyperlink",
    fullDetails: {
      whatIsThis: "Compliance setup encompasses all regulatory requirements needed before you can send commercial messages in India. This includes DLT (Distributed Ledger Technology) registration, sender ID approvals, and establishing relationships with telecom carriers.",
      whyExists: "TRAI mandates DLT registration for all commercial SMS senders to combat spam and ensure message traceability. Without proper compliance setup, your messages will be blocked by carriers.",
      beforeStep: "Business verification is complete and your account is active.",
      afterStep: "You have a Principal Entity ID, approved sender IDs, and can begin creating message templates.",
      hyperlinkHandles: [
        "Complete DLT portal registration on your behalf",
        "Principal Entity ID procurement and management",
        "Sender ID registration across all DLT operators",
        "Carrier relationship establishment",
        "Ongoing compliance monitoring and updates",
        "Automatic consent record management",
      ],
      customerHandles: [
        "Provide authorization letter for DLT registration",
        "Sign DLT registration forms when required",
        "Choose preferred sender IDs (6 alphanumeric characters)",
        "Maintain records of customer consent for messaging",
      ],
      compliance: [
        "DLT registration is legally mandatory for all commercial SMS in India",
        "Principal Entity must exactly match business registration documents",
        "Sender IDs must relate to your registered business name",
        "Non-compliance results in immediate message blocking and potential penalties",
        "All registered data is permanently stored on the DLT blockchain",
      ],
      timeline: "3-7 business days for new DLT registrations. We expedite this process through our established operator relationships. Sender ID approval typically takes 2-4 additional days.",
      failures: "DLT registration failures usually occur due to document mismatches between your business registration and submitted forms. We guide you through corrections and handle resubmission. Sender ID rejections are common for trademarked names—we suggest compliant alternatives.",
    },
  },
  {
    number: "03",
    icon: Settings,
    title: "System Configuration",
    subtitle: "Technical Integration",
    description: "Configure your messaging preferences, integrations, and automation rules through our dashboard or API.",
    details: [
      "API integration",
      "Webhook configuration",
      "Automation rules setup",
      "Template creation",
    ],
    handled: "both",
    fullDetails: {
      whatIsThis: "System configuration connects your applications to Hyperlink's messaging infrastructure. This includes API integration, webhook setup for delivery callbacks, automation rules for triggered messages, and template creation.",
      whyExists: "Proper technical integration ensures seamless message flow from your systems to end users with real-time status updates and automated workflows.",
      beforeStep: "Compliance setup is complete with approved sender IDs.",
      afterStep: "Your systems are connected and ready to send messages through campaigns or automated triggers.",
      hyperlinkHandles: [
        "API documentation and SDKs in multiple languages",
        "Sandbox environment for testing",
        "Webhook endpoint validation",
        "Template submission to DLT platform",
        "Integration support and troubleshooting",
        "Code samples and implementation guidance",
      ],
      customerHandles: [
        "Integrate API into your application",
        "Configure webhook endpoints to receive delivery reports",
        "Create message templates with appropriate variables",
        "Set up automation rules for triggered messaging",
        "Test thoroughly in sandbox before production",
      ],
      compliance: [
        "API credentials must be securely stored (never in client-side code)",
        "HTTPS required for all API communications",
        "Templates must be approved before use in production",
        "Webhook endpoints should be secured and authenticated",
      ],
      timeline: "Integration can be completed in hours to days depending on complexity. Simple REST API calls can be tested within minutes. Complex integrations with automation typically take 1-2 weeks.",
      failures: "Integration issues are resolved through our technical support team. Common problems include authentication errors, webhook validation failures, or template format mismatches. Our sandbox environment catches most issues before production.",
    },
  },
  {
    number: "04",
    icon: Workflow,
    title: "Campaign Creation",
    subtitle: "Message Setup",
    description: "Create and configure your messaging campaigns with audience targeting, scheduling, and delivery optimization.",
    details: [
      "Audience segmentation",
      "Message personalization",
      "Schedule optimization",
      "A/B testing setup",
    ],
    handled: "customer",
    fullDetails: {
      whatIsThis: "Campaign creation is where you define your messaging strategy—who receives messages, what content they see, when messages are sent, and how delivery should be optimized for your goals.",
      whyExists: "Well-structured campaigns ensure messages reach the right audience at optimal times, maximizing engagement while respecting user preferences and regulatory requirements.",
      beforeStep: "System configuration is complete and templates are approved.",
      afterStep: "Campaign is ready for processing by Hyperlink's intelligent delivery engine.",
      hyperlinkHandles: [
        "Campaign validation and error checking",
        "Duplicate number detection and removal",
        "DND (Do Not Disturb) filtering",
        "Optimal send time recommendations",
        "Cost estimation before launch",
        "A/B test result analysis",
      ],
      customerHandles: [
        "Define target audience segments",
        "Upload or connect recipient lists",
        "Select message templates and personalization",
        "Set campaign schedule and timezone",
        "Configure retry and fallback preferences",
        "Review cost estimates and approve launch",
      ],
      compliance: [
        "DND preferences must be automatically respected",
        "Promotional messages restricted to 9 AM - 9 PM recipient time",
        "Consent records must exist for all recipients",
        "Opt-out instructions required for promotional content",
        "Maximum message frequency limits apply",
      ],
      timeline: "Campaign creation is instant through dashboard or API. Validation takes seconds to minutes depending on list size. Large campaigns (1M+ recipients) may require pre-approval.",
      failures: "Campaign validation catches issues before sending. Common problems include invalid phone numbers, DND conflicts, or template variable mismatches. All issues are reported with specific error codes for correction.",
    },
  },
  {
    number: "05",
    icon: Send,
    title: "Intelligent Delivery",
    subtitle: "Optimized Routing",
    description: "Hyperlink's routing engine optimizes delivery across carriers with real-time tracking and automatic retries.",
    details: [
      "Smart carrier routing",
      "Real-time delivery tracking",
      "Automatic retry logic",
      "Fallback channel handling",
    ],
    handled: "hyperlink",
    fullDetails: {
      whatIsThis: "Intelligent delivery is Hyperlink's core technology—our routing engine analyzes each message and selects the optimal path through carrier networks, managing throughput, retries, and fallbacks automatically.",
      whyExists: "Smart routing maximizes delivery rates and speed by dynamically selecting carriers based on real-time performance data, network conditions, and cost optimization.",
      beforeStep: "Campaign is created and validated, ready for processing.",
      afterStep: "Messages are delivered to recipients with delivery confirmations flowing back in real-time.",
      hyperlinkHandles: [
        "Template-message validation against DLT",
        "Carrier selection algorithm based on real-time performance",
        "Load balancing across multiple routes",
        "Rate limiting and throughput management",
        "Automatic retry for transient failures",
        "Multi-channel fallback (SMS → Voice → WhatsApp)",
        "Real-time delivery status tracking",
      ],
      customerHandles: [
        "Monitor delivery progress in dashboard",
        "Handle delivery status webhooks if configured",
        "Review any permanent failures for list cleanup",
      ],
      compliance: [
        "All messages are logged for regulatory audits",
        "DLT scrubbing ensures only compliant messages are sent",
        "Processing respects time-of-day restrictions automatically",
        "Carrier-specific requirements handled per message",
      ],
      timeline: "Processing begins within seconds of campaign launch. High-volume campaigns process at 100,000+ messages per minute. Delivery typically occurs within 5 seconds for SMS.",
      failures: "Transient failures (network congestion, temporary carrier issues) are automatically retried. Permanent failures (invalid numbers, blocked content) are reported immediately with specific error codes. Fallback channels are triggered based on your configuration.",
    },
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Analytics & Optimization",
    subtitle: "Performance Insights",
    description: "Monitor performance, analyze engagement, and continuously optimize your messaging strategy.",
    details: [
      "Real-time dashboards",
      "Delivery analytics",
      "Engagement metrics",
      "Cost optimization insights",
    ],
    handled: "both",
    fullDetails: {
      whatIsThis: "Analytics provides comprehensive visibility into your messaging operations—delivery rates, engagement metrics, cost analysis, and actionable insights for optimization.",
      whyExists: "Data-driven insights help you optimize future campaigns, manage budgets effectively, identify issues quickly, and demonstrate ROI from your messaging investments.",
      beforeStep: "Messages have been delivered and delivery receipts processed.",
      afterStep: "Insights inform your next campaign strategy, template optimization, and audience targeting.",
      hyperlinkHandles: [
        "Real-time delivery dashboards",
        "Historical trend analysis and reporting",
        "Carrier performance comparison",
        "Cost and ROI reporting",
        "Custom report generation",
        "API access to all analytics data",
        "Automated alerts for anomalies",
      ],
      customerHandles: [
        "Review performance metrics regularly",
        "Export reports for stakeholders",
        "Use insights for campaign optimization",
        "Identify and clean invalid numbers",
        "Adjust strategies based on engagement data",
      ],
      compliance: [
        "Analytics data retained per regulatory requirements",
        "PII is protected in all reports",
        "Audit logs available for compliance reviews",
        "Data export complies with privacy regulations",
      ],
      timeline: "Real-time data available immediately after delivery. Aggregated reports generated hourly and daily. Historical data available for 12+ months.",
      failures: "Analytics infrastructure is highly available with 99.99% uptime. Historical data is never lost due to redundant storage across multiple regions.",
    },
  },
];

interface StepDetailModalProps {
  step: StepData | null;
  isOpen: boolean;
  onClose: () => void;
}

function StepDetailModal({ step, isOpen, onClose }: StepDetailModalProps) {
  if (!step) return null;

  const Icon = step.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-foreground mb-1">
                    {step.title}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* What is this step */}
              <section>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">1</span>
                  What is this step?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {step.fullDetails.whatIsThis}
                </p>
              </section>

              {/* Why does this exist */}
              <section>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">2</span>
                  Why does this step exist?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {step.fullDetails.whyExists}
                </p>
              </section>

              {/* Flow Context */}
              <section className="bg-secondary rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Before This Step</h4>
                    <p className="text-sm text-foreground">{step.fullDetails.beforeStep}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">After This Step</h4>
                    <p className="text-sm text-foreground">{step.fullDetails.afterStep}</p>
                  </div>
                </div>
              </section>

              {/* Responsibility Split */}
              <section>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-accent" />
                  Responsibility Split
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Hyperlink Handles */}
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold text-accent">Handled by Hyperlink</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.fullDetails.hyperlinkHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Customer Handles */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-foreground" />
                      <h4 className="font-semibold text-foreground">Your Responsibility</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.fullDetails.customerHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-4 h-4 rounded-full border-2 border-muted-foreground/30 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compliance */}
              {step.fullDetails.compliance.length > 0 && (
                <section className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-brand-gold" />
                    <h4 className="font-semibold text-foreground">Compliance & Regulations</h4>
                  </div>
                  <ul className="space-y-2">
                    {step.fullDetails.compliance.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <AlertTriangle className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Timeline */}
              <section className="flex items-center gap-4 bg-secondary rounded-xl p-4">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="font-semibold text-foreground">Expected Timeline</h4>
                  <p className="text-sm text-muted-foreground">{step.fullDetails.timeline}</p>
                </div>
              </section>

              {/* What if it fails */}
              <section className="border border-destructive/20 bg-destructive/5 rounded-xl p-4">
                <h4 className="font-semibold text-destructive mb-2">What happens if something fails?</h4>
                <p className="text-sm text-muted-foreground">{step.fullDetails.failures}</p>
              </section>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);

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
            <p className="text-sm text-primary-foreground/50 mt-4 animate-fade-up stagger-2">
              Click any step to explore the complete details
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
                <button
                  key={step.number}
                  onClick={() => setSelectedStep(step)}
                  className={cn(
                    "w-full text-left card-enterprise p-8 md:p-10 opacity-0 animate-fade-up",
                    "transition-all duration-300 hover:shadow-glow hover:-translate-y-1 hover:border-accent/50 cursor-pointer group"
                  )}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2">
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">{step.number}</span>
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6">
                      <h2 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{step.title}</h2>
                      <p className="text-sm text-muted-foreground mb-3">{step.subtitle}</p>
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
                      <div className="bg-secondary rounded-xl p-5 group-hover:bg-accent/5 transition-colors">
                        <h3 className="font-semibold text-foreground mb-3 text-sm">What happens:</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to explore details →
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
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

      {/* Step Detail Modal */}
      <StepDetailModal
        step={selectedStep}
        isOpen={!!selectedStep}
        onClose={() => setSelectedStep(null)}
      />
    </Layout>
  );
}
