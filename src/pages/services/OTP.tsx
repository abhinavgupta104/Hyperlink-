import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceFlowNode, FlowNodeData } from "@/components/ui/ServiceFlowNode";
import { NodeDetailModal } from "@/components/ui/NodeDetailModal";
import { OptInForm } from "@/components/ui/OptInForm";
import { 
  Building2, 
  Shield, 
  Workflow, 
  Send, 
  Users, 
  BarChart3,
  KeyRound,
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const flowNodes: FlowNodeData[] = [
  {
    id: "api-integration",
    title: "API Integration",
    subtitle: "Technical Setup",
    description: "Integrate Hyperlink OTP API into your application.",
    icon: Building2,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "API integration connects your application to Hyperlink's OTP service via REST API or SDK, enabling programmatic OTP generation and delivery.",
      whyExists: "Seamless integration ensures real-time OTP delivery as part of your authentication flow.",
      beforeStep: "Account is set up and API credentials generated.",
      afterStep: "Your application can trigger OTP requests.",
      hyperlinkHandles: [
        "API documentation and SDKs",
        "API key management",
        "Sandbox environment for testing",
        "Code samples and libraries",
      ],
      customerHandles: [
        "Integrate API into application",
        "Handle API responses",
        "Implement verification logic",
        "Test integration thoroughly",
      ],
      compliance: [
        "API credentials must be secured",
        "HTTPS required for all requests",
        "Rate limiting applies",
      ],
      timeline: "Integration typically takes hours to days depending on complexity.",
      failures: "Integration issues are resolved via technical support. Sandbox helps catch issues early.",
    },
  },
  {
    id: "template-setup",
    title: "OTP Template Setup",
    subtitle: "Message Configuration",
    description: "Configure OTP message templates with dynamic codes.",
    icon: Shield,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "OTP templates define the message format with placeholders for the dynamic verification code.",
      whyExists: "Templates ensure consistent, compliant OTP messages while allowing customization.",
      beforeStep: "API integration is complete.",
      afterStep: "Templates are ready for OTP delivery.",
      hyperlinkHandles: [
        "Template submission and approval",
        "DLT compliance handling",
        "Multi-language support",
        "Template validation",
      ],
      customerHandles: [
        "Define OTP message content",
        "Specify code format (4-digit, 6-digit, alphanumeric)",
        "Set expiry time display",
      ],
      compliance: [
        "Templates must be DLT registered",
        "OTP category must be used",
        "Sender ID must be approved",
      ],
      timeline: "Template approval typically 24-48 hours.",
      failures: "Template rejections are rare for OTP. We guide any required changes.",
    },
  },
  {
    id: "otp-generation",
    title: "OTP Generation",
    subtitle: "Secure Code Creation",
    description: "Generate cryptographically secure OTP codes on demand.",
    icon: KeyRound,
    status: "active",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "When your application requests an OTP, we generate a cryptographically secure, unique code with defined length and character set.",
      whyExists: "Secure generation ensures codes cannot be predicted or guessed by attackers.",
      beforeStep: "Your application triggers an OTP request.",
      afterStep: "OTP is queued for immediate delivery.",
      hyperlinkHandles: [
        "Cryptographic code generation",
        "Code uniqueness validation",
        "Expiry time management",
        "Retry prevention logic",
      ],
      customerHandles: [
        "Trigger OTP request with user identifier",
        "Store reference for verification",
      ],
      compliance: [
        "Codes are never stored in plain text",
        "Codes expire after defined period",
        "Rate limiting prevents abuse",
      ],
      timeline: "Generation is instant (milliseconds).",
      failures: "Generation rarely fails. Rate limits prevent abuse.",
    },
  },
  {
    id: "delivery",
    title: "Instant Delivery",
    subtitle: "Multi-Channel Dispatch",
    description: "OTP delivered via SMS with optional voice and email fallback.",
    icon: Send,
    status: "active",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Immediate delivery of OTP via primary channel (SMS) with intelligent fallback to voice call or email if delivery fails.",
      whyExists: "Multi-channel delivery maximizes verification success rates and user experience.",
      beforeStep: "OTP is generated.",
      afterStep: "User receives the verification code.",
      hyperlinkHandles: [
        "Priority routing for speed",
        "Automatic fallback triggering",
        "Delivery status tracking",
        "Real-time retry logic",
      ],
      customerHandles: [
        "Configure fallback preferences",
        "Handle delivery status callbacks",
      ],
      compliance: [
        "Delivery logs retained for audit",
        "User preferences for channel respected",
        "Fallback timing is configurable",
      ],
      timeline: "Sub-second delivery in most cases. SMS typically under 5 seconds.",
      failures: "Fallback channels ensure delivery even if primary fails.",
    },
  },
  {
    id: "verification",
    title: "Code Verification",
    subtitle: "Validation Logic",
    description: "Verify user-entered OTP against generated code.",
    icon: CheckCircle2,
    status: "pending",
    handledBy: "both",
    details: {
      whatIsThis: "When users enter the OTP, verification checks the code against what was generated, considering expiry and attempt limits.",
      whyExists: "Server-side verification ensures security and prevents replay attacks.",
      beforeStep: "User has received and entered the OTP.",
      afterStep: "Application proceeds based on verification result.",
      hyperlinkHandles: [
        "Verification API endpoint",
        "Expiry validation",
        "Attempt counting",
        "Brute-force protection",
      ],
      customerHandles: [
        "Collect user-entered code",
        "Call verification API",
        "Handle success/failure in UI",
        "Implement retry UX",
      ],
      compliance: [
        "Failed attempts are limited",
        "Codes are single-use",
        "Verification logs maintained",
      ],
      timeline: "Verification is instant.",
      failures: "Failed verification returns specific error codes (expired, invalid, max attempts).",
    },
  },
  {
    id: "retry-fallback",
    title: "Retry & Fallback",
    subtitle: "Delivery Assurance",
    description: "Automatic retry logic and channel fallback for maximum delivery.",
    icon: RefreshCcw,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Intelligent retry and fallback logic that switches channels (SMS → Voice → Email) if delivery fails.",
      whyExists: "Maximizes OTP delivery success to ensure users can complete verification.",
      beforeStep: "Initial delivery attempt may have failed.",
      afterStep: "OTP is delivered via fallback channel.",
      hyperlinkHandles: [
        "Automatic retry timing",
        "Channel switching logic",
        "Delivery success tracking",
        "User preference learning",
      ],
      customerHandles: [
        "Configure fallback preferences",
        "Set retry limits",
        "Handle resend requests",
      ],
      compliance: [
        "Retry limits prevent spam",
        "User consent for fallback channels",
        "All attempts are logged",
      ],
      timeline: "Retries happen within seconds. Fallback configurable.",
      failures: "After all channels exhausted, clear error for manual handling.",
    },
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection",
    subtitle: "Security Layer",
    description: "Real-time detection and prevention of OTP fraud attempts.",
    icon: Shield,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Real-time analysis of OTP patterns to detect and prevent fraud—artificial traffic, pumping attacks, and abuse.",
      whyExists: "Fraud prevention protects both you and your users while controlling costs.",
      beforeStep: "OTP requests are being processed.",
      afterStep: "Suspicious activity is blocked or flagged.",
      hyperlinkHandles: [
        "Traffic pattern analysis",
        "Velocity checking",
        "Geographic anomaly detection",
        "Known fraud pattern blocking",
      ],
      customerHandles: [
        "Review fraud alerts",
        "Configure sensitivity thresholds",
        "Whitelist known good traffic",
      ],
      compliance: [
        "Fraud data is analyzed for patterns",
        "Blocking decisions are logged",
        "Appeals process available",
      ],
      timeline: "Real-time detection and blocking.",
      failures: "False positives can occur. Whitelisting and tuning help optimize.",
    },
  },
  {
    id: "analytics",
    title: "OTP Analytics",
    subtitle: "Performance Metrics",
    description: "Track delivery rates, verification success, and fraud metrics.",
    icon: BarChart3,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Comprehensive analytics covering delivery success, verification rates, channel performance, and fraud metrics.",
      whyExists: "Data helps optimize OTP flows, identify issues, and demonstrate security effectiveness.",
      beforeStep: "OTP transactions generate data.",
      afterStep: "Insights inform optimization.",
      hyperlinkHandles: [
        "Real-time delivery dashboards",
        "Verification funnel analysis",
        "Channel comparison reports",
        "Fraud metrics and trends",
      ],
      customerHandles: [
        "Review performance metrics",
        "Identify drop-off points",
        "Optimize based on data",
      ],
      compliance: [
        "Analytics respect user privacy",
        "Data retained per requirements",
        "Audit logs available",
      ],
      timeline: "Real-time data with historical trends.",
      failures: "Analytics are highly available.",
    },
  },
];

export default function OTP() {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-otp">OTP & Transactional</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-otp/20 flex items-center justify-center mb-6">
                <KeyRound className="w-8 h-8 text-otp" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                OTP & Transactional
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8 animate-fade-up stagger-1">
                Lightning-fast OTP delivery with intelligent fallback, 
                fraud detection, and enterprise-grade security.
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
                <h3 className="font-semibold text-primary-foreground mb-4">OTP Features</h3>
                <ul className="space-y-3">
                  {[
                    "Sub-second OTP delivery",
                    "Multi-channel fallback (SMS, Voice, Email)",
                    "Cryptographic code generation",
                    "Built-in fraud detection",
                    "Rate limiting and abuse prevention",
                    "Real-time verification API",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-otp mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              OTP Implementation Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              From API integration to secure verification. Click any step for complete details.
            </p>
          </div>

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
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Secure Verification at Scale
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Protect your users and your platform with reliable, 
                fast OTP delivery and intelligent fraud prevention.
              </p>
              <ul className="space-y-3">
                {[
                  "99.9% delivery success rate",
                  "Average delivery under 3 seconds",
                  "Built-in fraud prevention",
                  "Simple REST API integration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-otp" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptInForm
              variant="hero"
              title="Implement Secure OTP"
              subtitle="Get started with enterprise-grade verification."
            />
          </div>
        </div>
      </section>

      <NodeDetailModal
        node={selectedNode}
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
      />
    </Layout>
  );
}
