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
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Palette,
  MousePointer
} from "lucide-react";
import { Link } from "react-router-dom";

const flowNodes: FlowNodeData[] = [
  {
    id: "business-verification",
    title: "Business Verification",
    subtitle: "Identity & Brand Check",
    description: "Verify your business identity and brand for RCS agent creation.",
    icon: Building2,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "Business verification for RCS is more comprehensive than SMS. Google and carriers verify your brand identity, website, and business legitimacy before allowing rich messaging.",
      whyExists: "RCS shows rich, branded content directly in messaging apps. Verification prevents impersonation and ensures users can trust the branded experience.",
      beforeStep: "You've decided to implement RCS messaging and have your business documentation ready.",
      afterStep: "Your business is approved for RCS agent creation.",
      hyperlinkHandles: [
        "Submission to Google Business Messages",
        "Carrier verification coordination",
        "Brand verification process management",
        "Documentation review and submission",
      ],
      customerHandles: [
        "Provide business registration documents",
        "Verify domain ownership",
        "Provide brand assets (logo, colors)",
        "Complete brand questionnaire",
      ],
      compliance: [
        "Brand must not impersonate other entities",
        "Website must be verified and active",
        "Business must be legally registered",
        "Content must comply with carrier policies",
      ],
      timeline: "5-10 business days for full verification. Hyperlink expedites through our carrier relationships.",
      failures: "Verification failures usually relate to documentation or website issues. We provide detailed guidance for resolution.",
    },
  },
  {
    id: "agent-creation",
    title: "RCS Agent Setup",
    subtitle: "Branded Messaging Profile",
    description: "Create your branded RCS agent with logo, colors, and business info.",
    icon: Palette,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "An RCS Agent is your branded presence in messaging apps. It includes your logo, brand colors, description, and verified business information that users see.",
      whyExists: "The agent creates a trusted, professional presence. Users see your brand identity instead of just a phone number.",
      beforeStep: "Business verification is complete.",
      afterStep: "Your RCS agent is live and ready for template submission.",
      hyperlinkHandles: [
        "Agent creation in carrier systems",
        "Logo and asset optimization",
        "Multi-carrier agent synchronization",
        "Agent health monitoring",
      ],
      customerHandles: [
        "Provide high-resolution logo",
        "Define brand color palette",
        "Write business description",
        "Review and approve agent preview",
      ],
      compliance: [
        "Logo must meet size and format requirements",
        "Description must accurately represent business",
        "Contact information must be valid",
      ],
      timeline: "2-3 business days after verification approval.",
      failures: "Asset issues are most common. We provide templates and guidelines to avoid rejections.",
    },
  },
  {
    id: "template-design",
    title: "Rich Template Design",
    subtitle: "Interactive Content",
    description: "Design rich message templates with cards, carousels, and actions.",
    icon: MousePointer,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "RCS templates are rich, interactive message formats. They can include images, buttons, carousels, quick replies, and suggested actions—far beyond plain SMS.",
      whyExists: "Rich templates drive engagement and conversions. Interactive elements let users take action directly within the message.",
      beforeStep: "RCS Agent is approved and active.",
      afterStep: "Templates are submitted for carrier approval.",
      hyperlinkHandles: [
        "Template builder and preview tools",
        "Multi-carrier format optimization",
        "Fallback SMS template generation",
        "A/B testing framework",
      ],
      customerHandles: [
        "Design message content and structure",
        "Select card types and layouts",
        "Define action buttons and URLs",
        "Provide images and media assets",
      ],
      compliance: [
        "Images must meet quality and size requirements",
        "Action URLs must be verified domains",
        "Content must follow carrier guidelines",
        "Promotional content has specific restrictions",
      ],
      timeline: "Template design is instant. Approval takes 3-7 business days.",
      failures: "Image quality and URL issues are most common. Our preview system catches most issues before submission.",
    },
  },
  {
    id: "carrier-approval",
    title: "Carrier Approval",
    subtitle: "Multi-Network Review",
    description: "Templates reviewed and approved across all supported carrier networks.",
    icon: CheckCircle,
    status: "active",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Each carrier (Jio, Airtel, Vi, etc.) reviews and approves your RCS templates. This ensures content meets their specific guidelines.",
      whyExists: "Carriers maintain their own content standards to protect users. Multi-carrier approval ensures consistent reach.",
      beforeStep: "Rich templates are designed and submitted.",
      afterStep: "Templates are ready for campaign deployment.",
      hyperlinkHandles: [
        "Submission to all carrier portals",
        "Carrier relationship management",
        "Approval tracking and updates",
        "Rejection resolution",
      ],
      customerHandles: [
        "Review carrier feedback if any",
        "Approve template modifications if needed",
      ],
      compliance: [
        "Each carrier may have specific requirements",
        "Template modifications may be required per carrier",
        "Approval status varies by carrier",
      ],
      timeline: "3-7 business days per carrier. We submit to all carriers simultaneously.",
      failures: "Carrier-specific rejections are handled individually. We guide modifications needed for each carrier.",
    },
  },
  {
    id: "campaign-launch",
    title: "Campaign Launch",
    subtitle: "Audience & Scheduling",
    description: "Configure your RCS campaign with targeting and delivery optimization.",
    icon: Workflow,
    status: "pending",
    handledBy: "customer",
    details: {
      whatIsThis: "Campaign configuration for RCS includes audience selection, scheduling, and fallback settings for devices that don't support RCS.",
      whyExists: "Proper campaign setup ensures messages reach the right audience with automatic SMS fallback for maximum reach.",
      beforeStep: "Templates are approved across carriers.",
      afterStep: "Campaign is processed for delivery.",
      hyperlinkHandles: [
        "RCS capability detection",
        "Automatic SMS fallback routing",
        "Carrier routing optimization",
        "Delivery time optimization",
      ],
      customerHandles: [
        "Define target audience",
        "Set campaign schedule",
        "Configure fallback preferences",
        "Review and launch campaign",
      ],
      compliance: [
        "Consent requirements same as SMS",
        "Time-of-day restrictions apply",
        "Opt-out handling is automatic",
      ],
      timeline: "Instant campaign setup. Processing begins immediately on schedule.",
      failures: "Fallback to SMS ensures delivery even if RCS fails. All failures are logged.",
    },
  },
  {
    id: "delivery",
    title: "Rich Delivery",
    subtitle: "Interactive Experience",
    description: "Messages delivered with full rich media and interactive capabilities.",
    icon: Send,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "RCS messages are delivered directly to compatible messaging apps with full rich media, branding, and interactive elements intact.",
      whyExists: "Rich delivery creates engaging, branded experiences that drive action directly from the message.",
      beforeStep: "Campaign is launched and processed.",
      afterStep: "Users interact with your rich content.",
      hyperlinkHandles: [
        "Rich content delivery",
        "Capability-based routing",
        "Real-time delivery tracking",
        "Interaction event capture",
      ],
      customerHandles: [
        "Monitor delivery in dashboard",
      ],
      compliance: [
        "Rich content must match approved templates",
        "User data from interactions is protected",
      ],
      timeline: "Delivery within seconds for RCS-capable devices.",
      failures: "Automatic SMS fallback if RCS delivery fails. Full visibility into delivery status.",
    },
  },
  {
    id: "engagement",
    title: "User Engagement",
    subtitle: "Interactive Actions",
    description: "Track user interactions with buttons, cards, and suggested actions.",
    icon: Users,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "RCS provides detailed engagement metrics—not just delivery, but button clicks, carousel swipes, and action completions.",
      whyExists: "Rich engagement data helps optimize campaigns and prove ROI from interactive messaging investments.",
      beforeStep: "Messages are delivered to users.",
      afterStep: "Engagement data powers analytics and optimization.",
      hyperlinkHandles: [
        "Real-time interaction tracking",
        "Button click analytics",
        "Carousel engagement metrics",
        "Conversion tracking",
      ],
      customerHandles: [
        "Review engagement reports",
        "Optimize based on insights",
      ],
      compliance: [
        "Engagement data is anonymized for reporting",
        "User privacy is maintained",
      ],
      timeline: "Real-time engagement data available immediately.",
      failures: "Engagement tracking is highly reliable. Data is never lost.",
    },
  },
  {
    id: "analytics",
    title: "Rich Analytics",
    subtitle: "Performance Intelligence",
    description: "Comprehensive analytics for RCS performance, engagement, and conversions.",
    icon: BarChart3,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "RCS analytics go beyond delivery rates. Track engagement, button performance, conversion rates, and compare with SMS fallback performance.",
      whyExists: "Detailed analytics help prove RCS value over SMS and optimize message designs for better results.",
      beforeStep: "Engagement events are captured.",
      afterStep: "Insights inform campaign optimization.",
      hyperlinkHandles: [
        "RCS vs SMS performance comparison",
        "Engagement funnel analytics",
        "A/B test result analysis",
        "ROI reporting",
        "Custom dashboard creation",
      ],
      customerHandles: [
        "Review performance metrics",
        "Apply insights to future campaigns",
      ],
      compliance: [
        "All analytics comply with privacy regulations",
        "Data retention follows regulatory requirements",
      ],
      timeline: "Real-time data with historical trend analysis.",
      failures: "Analytics infrastructure is highly available with redundant storage.",
    },
  },
];

export default function RCS() {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-rcs">RCS Messaging</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-rcs/20 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-rcs" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                RCS Messaging
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8 animate-fade-up stagger-1">
                Rich, interactive messaging with branded profiles, 
                carousels, buttons, and media. The future of business messaging.
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
                <h3 className="font-semibold text-primary-foreground mb-4">RCS Capabilities</h3>
                <ul className="space-y-3">
                  {[
                    "Branded business profiles with verification",
                    "Rich cards with images and buttons",
                    "Carousel messages for product showcases",
                    "Suggested replies and actions",
                    "Read receipts and typing indicators",
                    "Automatic SMS fallback",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-rcs mt-0.5 shrink-0" />
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
              RCS Implementation Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              From brand verification to rich message delivery. Click any step to understand the complete process.
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

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Upgrade to Rich Messaging
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                RCS delivers 3x higher engagement than SMS. Let us help you create 
                compelling, interactive experiences for your customers.
              </p>
              <ul className="space-y-3">
                {[
                  "Full brand verification support",
                  "Template design assistance",
                  "Automatic SMS fallback included",
                  "Engagement analytics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-rcs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptInForm
              variant="hero"
              title="Get Started with RCS"
              subtitle="See how rich messaging can transform your customer engagement."
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
