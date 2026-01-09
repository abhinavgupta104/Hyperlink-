import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceFlowNode, FlowNodeData } from "@/components/ui/ServiceFlowNode";
import { NodeDetailModal } from "@/components/ui/NodeDetailModal";
import { OptInForm } from "@/components/ui/OptInForm";
import { 
  Building2, 
  FileText, 
  Shield, 
  CheckCircle, 
  Workflow, 
  Send, 
  Users, 
  BarChart3,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const flowNodes: FlowNodeData[] = [
  {
    id: "business-setup",
    title: "Business Setup",
    subtitle: "Account Configuration",
    description: "Register your business entity and configure account settings for SMS operations.",
    icon: Building2,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "This is the initial step where your business is onboarded onto the Hyperlink platform. We collect essential business information, verify your identity, and set up your organization's messaging account.",
      whyExists: "Proper business setup ensures regulatory compliance, enables carrier trust scoring, and allows for accurate billing and reporting. It's required by telecom regulations to verify message senders.",
      beforeStep: "You've decided to use Hyperlink for SMS messaging and are ready to begin the onboarding process.",
      afterStep: "Your business profile is active and you can proceed to DLT registration and campaign configuration.",
      hyperlinkHandles: [
        "Account creation and verification",
        "Business profile setup in our system",
        "Initial carrier network registration",
        "Dashboard access provisioning",
        "API credentials generation",
      ],
      customerHandles: [
        "Provide accurate business documentation",
        "Verify company email and phone",
        "Review and accept terms of service",
        "Complete KYC verification if required",
      ],
      compliance: [
        "Business verification is mandatory under TRAI guidelines",
        "KYC documents must match registered business entity",
        "GSTIN validation required for Indian businesses",
      ],
      timeline: "Typically 1-2 business days for verification. Instant for pre-verified businesses.",
      failures: "If verification fails, you'll receive specific feedback on what documentation is needed. Most issues are resolved within 24 hours with proper documentation.",
    },
  },
  {
    id: "dlt-registration",
    title: "DLT Registration",
    subtitle: "Regulatory Compliance",
    description: "Register with TRAI's Distributed Ledger Technology platform for compliance.",
    icon: Shield,
    status: "completed",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "DLT (Distributed Ledger Technology) registration is a mandatory requirement by TRAI (Telecom Regulatory Authority of India) for all bulk SMS senders. Your business entity and sender IDs must be registered on the DLT blockchain.",
      whyExists: "DLT was introduced to combat spam and ensure message traceability. Every commercial message in India must originate from a registered entity with approved templates.",
      beforeStep: "Business setup is complete and your account is verified.",
      afterStep: "You receive your Principal Entity ID and can register sender IDs and message templates.",
      hyperlinkHandles: [
        "DLT portal registration on your behalf",
        "Principal Entity ID procurement",
        "Ongoing DLT compliance monitoring",
        "Automatic consent record management",
        "Integration with all major DLT operators",
      ],
      customerHandles: [
        "Provide authorization letter if required",
        "Sign DLT registration forms",
        "Maintain records of customer consent",
      ],
      compliance: [
        "DLT registration is legally mandatory for all commercial SMS",
        "Principal Entity must match business registration documents",
        "Non-compliance can result in message blocking and penalties",
        "All registered data is permanently stored on blockchain",
      ],
      timeline: "3-5 business days for new registrations. We expedite this process through our operator relationships.",
      failures: "DLT registration failures usually occur due to document mismatches. We'll guide you through corrections and resubmission.",
    },
  },
  {
    id: "sender-id",
    title: "Sender ID Approval",
    subtitle: "Brand Identity",
    description: "Register and approve your branded sender ID for message delivery.",
    icon: FileText,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "A Sender ID is the alphanumeric identifier (like 'HYPRLK') that appears as the sender of your messages. It must be registered and approved before use.",
      whyExists: "Sender IDs help recipients identify legitimate business messages and build brand trust. They also enable regulatory tracking and spam prevention.",
      beforeStep: "DLT registration is complete with your Principal Entity ID.",
      afterStep: "Your approved Sender ID can be used in message templates.",
      hyperlinkHandles: [
        "Sender ID registration on DLT",
        "Carrier provisioning for approved IDs",
        "Multiple Sender ID management",
        "Sender ID health monitoring",
      ],
      customerHandles: [
        "Choose appropriate Sender ID (6 characters)",
        "Ensure ID aligns with business name",
        "Provide brand authorization if using trademarked names",
      ],
      compliance: [
        "Sender IDs must not impersonate government entities",
        "Must relate to registered business name",
        "Certain prefixes reserved for specific sectors (banks, government)",
        "Changes require new approval process",
      ],
      timeline: "2-4 business days for approval. Promotional sender IDs may take longer.",
      failures: "Rejections usually occur for trademark conflicts or reserved names. We'll suggest alternatives and resubmit.",
    },
  },
  {
    id: "template-approval",
    title: "Template Approval",
    subtitle: "Content Registration",
    description: "Create and get approval for your message templates on DLT platform.",
    icon: CheckCircle,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "Message templates are pre-approved formats for your SMS content. Each template defines the structure, variable placeholders, and message category.",
      whyExists: "Templates ensure messages comply with content guidelines and enable instant verification during sending. They prevent unauthorized or malicious content.",
      beforeStep: "Sender ID is approved and ready for template association.",
      afterStep: "Templates are ready for use in campaigns. Hyperlink validates all messages against approved templates.",
      hyperlinkHandles: [
        "Template submission to DLT platform",
        "Template-message matching engine",
        "Template performance analytics",
        "Automatic template health checks",
        "Multi-operator template sync",
      ],
      customerHandles: [
        "Create template content with variables",
        "Choose correct message category (Transactional/Promotional/Service)",
        "Define variable formats and lengths",
        "Review and update templates as needed",
      ],
      compliance: [
        "Templates must match message category (OTP, Alert, Promotional)",
        "Variable count and format must match actual messages",
        "Promotional templates have time restrictions (9 AM - 9 PM)",
        "Template content cannot be changed after approval",
      ],
      timeline: "24-72 hours for template approval. Transactional templates are typically faster.",
      failures: "Template rejections occur for content policy violations or format issues. We provide specific feedback for corrections.",
    },
  },
  {
    id: "campaign-config",
    title: "Campaign Configuration",
    subtitle: "Message Setup",
    description: "Configure your messaging campaign with audience, schedule, and delivery settings.",
    icon: Workflow,
    status: "pending",
    handledBy: "customer",
    details: {
      whatIsThis: "Campaign configuration is where you define your messaging parameters—who receives messages, when they're sent, and how delivery should be optimized.",
      whyExists: "Proper campaign setup ensures messages reach the right audience at the right time while optimizing for deliverability and cost efficiency.",
      beforeStep: "Templates are approved and ready for use.",
      afterStep: "Campaign is ready for processing by Hyperlink's routing engine.",
      hyperlinkHandles: [
        "Campaign validation and error checking",
        "Duplicate number detection",
        "DND (Do Not Disturb) filtering",
        "Optimal send time suggestions",
        "Cost estimation before sending",
      ],
      customerHandles: [
        "Upload or connect recipient list",
        "Select message template",
        "Set schedule and timezone",
        "Configure retry and fallback options",
        "Review cost estimates",
      ],
      compliance: [
        "DND preferences must be respected",
        "Promotional messages only during allowed hours",
        "Consent records must exist for all recipients",
        "Opt-out instructions required for promotional content",
      ],
      timeline: "Instant campaign creation. Validation takes seconds to minutes depending on list size.",
      failures: "Campaign validation catches issues before sending. Common issues: invalid numbers, DND conflicts, template mismatches.",
    },
  },
  {
    id: "processing",
    title: "Hyperlink Processing",
    subtitle: "Intelligent Routing",
    description: "Messages are processed through our intelligent routing engine for optimal delivery.",
    icon: Workflow,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Our processing engine receives your campaign, validates each message, applies routing logic, and prepares messages for carrier submission.",
      whyExists: "Intelligent processing maximizes delivery rates by selecting optimal routes, handling carrier-specific requirements, and managing throughput.",
      beforeStep: "Campaign is configured and submitted for processing.",
      afterStep: "Messages are queued and handed off to carrier networks.",
      hyperlinkHandles: [
        "Template-message validation",
        "Carrier selection algorithm",
        "Load balancing across routes",
        "Rate limiting and throttling",
        "Real-time queue management",
        "Automatic retry logic",
      ],
      customerHandles: [
        "Monitor processing status via dashboard",
        "No action required during processing",
      ],
      compliance: [
        "All messages are logged for regulatory audits",
        "DLT scrubbing ensures only compliant messages are sent",
        "Processing respects time-of-day restrictions",
      ],
      timeline: "Processing begins within seconds. High-volume campaigns process at 100,000+ messages per minute.",
      failures: "Processing failures are automatically retried. Persistent failures are reported with specific error codes.",
    },
  },
  {
    id: "carrier-delivery",
    title: "Carrier Delivery",
    subtitle: "Network Transmission",
    description: "Messages are transmitted through carrier networks to reach end devices.",
    icon: Send,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "This is when messages leave our platform and travel through telecom carrier networks (Airtel, Jio, Vi, etc.) to reach recipients' phones.",
      whyExists: "Carrier networks are the final mile for SMS delivery. We maintain relationships with all major carriers to ensure reliable delivery.",
      beforeStep: "Messages are processed and validated by Hyperlink.",
      afterStep: "Messages reach recipient devices and delivery confirmations flow back.",
      hyperlinkHandles: [
        "Direct carrier API integrations",
        "Multi-carrier failover routing",
        "Network congestion management",
        "Carrier SLA monitoring",
        "Real-time delivery tracking",
      ],
      customerHandles: [
        "No action required",
        "Monitor delivery reports in dashboard",
      ],
      compliance: [
        "All carrier communications are encrypted",
        "Message content is never stored by carriers long-term",
        "Delivery data is retained per regulatory requirements",
      ],
      timeline: "Delivery typically occurs within seconds. Network congestion or device issues may cause delays.",
      failures: "Failed deliveries are retried automatically. Permanent failures (invalid numbers, blocked) are reported immediately.",
    },
  },
  {
    id: "recipient-receipt",
    title: "Recipient Receipt",
    subtitle: "End User Delivery",
    description: "Messages are received on end user devices with full delivery confirmation.",
    icon: Users,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "The final step where your message appears on the recipient's mobile device. Delivery receipts confirm successful receipt.",
      whyExists: "Delivery confirmation closes the loop and provides proof that your message reached its destination.",
      beforeStep: "Carrier has transmitted the message to the recipient's network.",
      afterStep: "Delivery report is generated and available in your dashboard.",
      hyperlinkHandles: [
        "Delivery receipt processing",
        "Status code interpretation",
        "Delivery timestamp recording",
        "Failed delivery categorization",
        "Retry scheduling for transient failures",
      ],
      customerHandles: [
        "Review delivery reports",
        "Handle bounce management",
        "Update contact lists based on failures",
      ],
      compliance: [
        "Delivery receipts are stored for audit purposes",
        "Failed message handling follows regulatory guidelines",
        "Opt-out requests in replies are processed automatically",
      ],
      timeline: "Delivery receipts typically arrive within seconds of actual delivery.",
      failures: "Non-delivery reasons are categorized (invalid number, DND, network issue) for appropriate handling.",
    },
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    subtitle: "Performance Insights",
    description: "Comprehensive delivery analytics, campaign performance, and actionable insights.",
    icon: BarChart3,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Real-time and historical analytics showing delivery rates, campaign performance, cost analysis, and engagement metrics.",
      whyExists: "Data-driven insights help you optimize future campaigns, manage budgets, and demonstrate ROI from messaging investments.",
      beforeStep: "Messages have been delivered and receipts processed.",
      afterStep: "Insights inform your next campaign strategy.",
      hyperlinkHandles: [
        "Real-time delivery dashboards",
        "Historical trend analysis",
        "Carrier performance comparison",
        "Cost and ROI reporting",
        "Custom report generation",
        "API access to analytics data",
      ],
      customerHandles: [
        "Review performance metrics",
        "Export reports as needed",
        "Use insights for optimization",
      ],
      compliance: [
        "Analytics data retained per regulatory requirements",
        "PII is protected in all reports",
        "Audit logs available for compliance reviews",
      ],
      timeline: "Real-time data available immediately. Aggregated reports generated daily.",
      failures: "Analytics are highly available. Historical data is never lost due to our redundant storage.",
    },
  },
];

export default function BulkSMS() {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-accent">Bulk SMS</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-sms/20 flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-sms" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Bulk SMS
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8 animate-fade-up stagger-1">
                High-volume messaging at scale with intelligent routing, 
                carrier optimization, and complete DLT compliance built in.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up stagger-2">
                <Link to="/contact" className="btn-accent">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="#flow" className="btn-outline border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  See How It Works
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
                <h3 className="font-semibold text-primary-foreground mb-4">Who is this for?</h3>
                <ul className="space-y-3">
                  {[
                    "E-commerce platforms sending order updates",
                    "Banks and financial services for alerts",
                    "Healthcare providers for appointment reminders",
                    "Marketing teams running promotional campaigns",
                    "Enterprises requiring high-volume notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Flow */}
      <section id="flow" className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete System Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              Click on any step to understand exactly what happens, who is responsible, 
              and what compliance requirements apply.
            </p>
          </div>

          {/* Flow Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowNodes.map((node, index) => (
              <ServiceFlowNode
                key={node.id}
                node={node}
                index={index}
                isActive={selectedNode?.id === node.id}
                onClick={() => setSelectedNode(node)}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 className="w-3 h-3 text-accent" />
              </div>
              <span className="text-muted-foreground">Handled by Hyperlink</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <Users className="w-3 h-3 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground">Customer Action Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get in Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              After the entire process, here's what you'll see and control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Delivery Status",
                description: "Live tracking of every message with delivery confirmations, failures, and pending status.",
              },
              {
                title: "Campaign Analytics",
                description: "Comprehensive metrics including delivery rates, cost per message, and performance trends.",
              },
              {
                title: "Compliance Logs",
                description: "Complete audit trail of DLT registrations, template approvals, and regulatory compliance.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card-enterprise opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Scale Your SMS Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get started with Hyperlink's Bulk SMS service. Our team will handle 
                compliance setup while you focus on your messaging strategy.
              </p>
              <ul className="space-y-3">
                {[
                  "Complete DLT registration handled",
                  "Dedicated onboarding support",
                  "Volume-based pricing",
                  "24/7 technical assistance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptInForm
              variant="hero"
              title="Request a Bulk SMS Demo"
              subtitle="See how Hyperlink can transform your messaging operations."
            />
          </div>
        </div>
      </section>

      {/* Node Detail Modal */}
      <NodeDetailModal
        node={selectedNode}
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
      />
    </Layout>
  );
}
