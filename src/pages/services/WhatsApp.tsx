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
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Bot,
  MessageSquareText
} from "lucide-react";
import { Link } from "react-router-dom";

const flowNodes: FlowNodeData[] = [
  {
    id: "fb-verification",
    title: "Meta Business Verification",
    subtitle: "Account Setup",
    description: "Verify your business with Meta for WhatsApp Business API access.",
    icon: Building2,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "Meta Business Verification is required to access the WhatsApp Business API. Your business identity, documents, and website are verified by Meta.",
      whyExists: "WhatsApp protects its platform integrity through strict business verification. This ensures only legitimate businesses can send messages.",
      beforeStep: "You've decided to use WhatsApp Business API and have Meta Business Suite access.",
      afterStep: "Your business is verified and can apply for WhatsApp API access.",
      hyperlinkHandles: [
        "Meta Business Suite setup",
        "Verification submission coordination",
        "Documentation guidance",
        "Appeal process if needed",
      ],
      customerHandles: [
        "Create Meta Business Suite account",
        "Provide business documentation",
        "Verify domain ownership",
        "Complete verification questionnaire",
      ],
      compliance: [
        "Business must be legally registered",
        "Website must be active and verified",
        "Business must have legitimate use case",
        "Cannot promote restricted products/services",
      ],
      timeline: "3-14 business days depending on business complexity and documentation.",
      failures: "Verification rejections require specific documentation. We guide you through the appeal process.",
    },
  },
  {
    id: "waba-setup",
    title: "WhatsApp Business Account",
    subtitle: "API Access",
    description: "Create and configure your WhatsApp Business Account (WABA).",
    icon: MessageCircle,
    status: "completed",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "A WhatsApp Business Account (WABA) is the container for your WhatsApp phone numbers and settings. It connects to the Cloud API or On-Premise API.",
      whyExists: "The WABA provides centralized management of your WhatsApp presence, phone numbers, and messaging settings.",
      beforeStep: "Meta Business Verification is complete.",
      afterStep: "WABA is ready for phone number registration.",
      hyperlinkHandles: [
        "WABA creation and configuration",
        "API type selection (Cloud/On-Premise)",
        "Billing setup",
        "Webhook configuration",
      ],
      customerHandles: [
        "Approve WABA creation",
        "Provide phone number for registration",
        "Review account settings",
      ],
      compliance: [
        "One WABA can have multiple phone numbers",
        "Each phone number has messaging limits",
        "Quality rating affects sending limits",
      ],
      timeline: "1-2 business days after verification approval.",
      failures: "WABA creation rarely fails. Issues are usually resolved quickly with Meta support.",
    },
  },
  {
    id: "phone-registration",
    title: "Phone Number Registration",
    subtitle: "Display Name Setup",
    description: "Register your phone number and configure your display name.",
    icon: Shield,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "Your business phone number is registered with WhatsApp and associated with a display name that users see when you message them.",
      whyExists: "Phone number registration ensures your messages show your verified business name, building trust with recipients.",
      beforeStep: "WABA is created and configured.",
      afterStep: "Phone number is active and ready for template submission.",
      hyperlinkHandles: [
        "Phone number registration process",
        "Display name approval",
        "Number quality monitoring",
        "Number migration if needed",
      ],
      customerHandles: [
        "Provide phone number (new or existing)",
        "Verify number via OTP",
        "Choose display name",
        "Approve display name",
      ],
      compliance: [
        "Display name must match business name",
        "Number cannot be used by personal WhatsApp",
        "Number migration from personal account possible",
        "Display name changes require re-approval",
      ],
      timeline: "Same day for new numbers. 2-3 days for display name approval.",
      failures: "Display name rejections are common. We help craft compliant names that get approved.",
    },
  },
  {
    id: "template-creation",
    title: "Template Creation",
    subtitle: "Message Templates",
    description: "Create message templates for outbound conversations.",
    icon: MessageSquareText,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "WhatsApp templates are pre-approved message formats required for initiating conversations. They support text, media, buttons, and dynamic variables.",
      whyExists: "Templates ensure businesses send relevant, expected content. Users must opt-in and templates prevent spam.",
      beforeStep: "Phone number is registered and active.",
      afterStep: "Templates are submitted for Meta approval.",
      hyperlinkHandles: [
        "Template creation tools",
        "Category selection guidance",
        "Multi-language support",
        "Template performance tracking",
      ],
      customerHandles: [
        "Define template content",
        "Select template category",
        "Provide variables and samples",
        "Review template preview",
      ],
      compliance: [
        "Templates must be in approved categories",
        "Marketing requires explicit opt-in",
        "Templates cannot request sensitive data",
        "Variable content must be relevant",
      ],
      timeline: "Template approval typically 24-48 hours. Some categories are faster.",
      failures: "Template rejections include specific reasons. We help modify and resubmit.",
    },
  },
  {
    id: "chatbot",
    title: "Chatbot Integration",
    subtitle: "Automation Setup",
    description: "Configure automated responses and chatbot flows.",
    icon: Bot,
    status: "pending",
    handledBy: "both",
    details: {
      whatIsThis: "Chatbot integration enables automated responses to user messages within the 24-hour messaging window without templates.",
      whyExists: "Chatbots provide instant responses, handle common queries, and route complex issues to human agents.",
      beforeStep: "Templates are approved and account is active.",
      afterStep: "Automation is live and handling conversations.",
      hyperlinkHandles: [
        "Chatbot platform integration",
        "Flow builder access",
        "Webhook management",
        "Handoff to human agents",
      ],
      customerHandles: [
        "Design conversation flows",
        "Define responses and routing",
        "Test automation thoroughly",
        "Train human agents for handoffs",
      ],
      compliance: [
        "Chatbot must identify as automated",
        "Human handoff option required",
        "Cannot collect prohibited data",
      ],
      timeline: "Chatbot setup can be done in days. Complexity varies by use case.",
      failures: "Poor chatbot design leads to user frustration. We help optimize flows.",
    },
  },
  {
    id: "campaign",
    title: "Campaign Launch",
    subtitle: "Message Delivery",
    description: "Launch messaging campaigns to opted-in users.",
    icon: Send,
    status: "pending",
    handledBy: "customer",
    details: {
      whatIsThis: "Campaigns use approved templates to reach users who have opted in. Each message starts a 24-hour conversation window.",
      whyExists: "Campaigns enable proactive outreach for notifications, updates, and marketing with proper consent.",
      beforeStep: "Templates approved, audience with opt-in ready.",
      afterStep: "Messages delivered, conversations open.",
      hyperlinkHandles: [
        "Campaign processing",
        "Rate limiting management",
        "Quality score monitoring",
        "Delivery optimization",
      ],
      customerHandles: [
        "Select audience with consent",
        "Choose template and variables",
        "Schedule campaign",
        "Monitor delivery",
      ],
      compliance: [
        "Recipients must have opted in",
        "Marketing templates have stricter consent rules",
        "Messaging limits based on quality tier",
        "Opt-out requests must be honored",
      ],
      timeline: "Processing begins immediately. Delivery speed depends on volume and tier.",
      failures: "Quality issues can limit sending. We help maintain high quality scores.",
    },
  },
  {
    id: "conversations",
    title: "Conversation Management",
    subtitle: "Customer Engagement",
    description: "Manage ongoing conversations and support interactions.",
    icon: Users,
    status: "pending",
    handledBy: "both",
    details: {
      whatIsThis: "Once a user responds, a 24-hour conversation window opens. Free-form messaging is allowed within this window.",
      whyExists: "The conversation window enables natural, interactive support without template restrictions.",
      beforeStep: "User has responded to your message or initiated contact.",
      afterStep: "Conversation concludes or requires follow-up template.",
      hyperlinkHandles: [
        "Inbox management tools",
        "Multi-agent support",
        "Conversation routing",
        "SLA monitoring",
      ],
      customerHandles: [
        "Respond to user messages",
        "Route complex queries",
        "Close conversations appropriately",
        "Send follow-up templates if needed",
      ],
      compliance: [
        "24-hour window for session messages",
        "Templates required to reopen expired conversations",
        "User data must be protected",
      ],
      timeline: "Real-time conversation management.",
      failures: "Slow responses hurt quality. We provide tools to meet response SLAs.",
    },
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    subtitle: "Performance Tracking",
    description: "Track message performance, conversation metrics, and quality scores.",
    icon: BarChart3,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Comprehensive analytics covering message delivery, conversation metrics, template performance, and quality scores.",
      whyExists: "Analytics help optimize campaigns, improve response times, and maintain high quality ratings.",
      beforeStep: "Conversations and campaigns generate data.",
      afterStep: "Insights drive optimization and strategy.",
      hyperlinkHandles: [
        "Real-time delivery tracking",
        "Conversation analytics",
        "Template performance reports",
        "Quality score monitoring",
        "Cost analysis",
      ],
      customerHandles: [
        "Review performance metrics",
        "Act on quality warnings",
        "Optimize based on data",
      ],
      compliance: [
        "Analytics respect user privacy",
        "Quality scores affect messaging limits",
        "Low quality can result in restrictions",
      ],
      timeline: "Real-time data with historical analysis.",
      failures: "Poor quality scores trigger warnings. We help address issues proactively.",
    },
  },
];

export default function WhatsApp() {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-whatsapp">WhatsApp Automation</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-whatsapp/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-whatsapp" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                WhatsApp Automation
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8 animate-fade-up stagger-1">
                Official WhatsApp Business API with template messaging, 
                chatbots, and customer engagement tools.
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
                <h3 className="font-semibold text-primary-foreground mb-4">WhatsApp Business Features</h3>
                <ul className="space-y-3">
                  {[
                    "Official Business API access",
                    "Template messaging for outbound",
                    "24-hour conversation windows",
                    "Chatbot and automation support",
                    "Multi-agent inbox management",
                    "Rich media and interactive buttons",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-whatsapp mt-0.5 shrink-0" />
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
              WhatsApp Implementation Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              From Meta verification to automated conversations. Click any step for details.
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
                Connect with Customers on WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                2 billion people use WhatsApp monthly. Meet your customers where they already are.
              </p>
              <ul className="space-y-3">
                {[
                  "Official API partner status",
                  "Meta verification support",
                  "Chatbot development assistance",
                  "Quality score optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptInForm
              variant="hero"
              title="Get WhatsApp Business API"
              subtitle="Start engaging customers on the world's most popular messaging platform."
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
