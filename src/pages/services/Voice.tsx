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
  Phone,
  ArrowRight,
  CheckCircle2,
  Mic,
  PhoneForwarded
} from "lucide-react";
import { Link } from "react-router-dom";

const flowNodes: FlowNodeData[] = [
  {
    id: "account-setup",
    title: "Voice Account Setup",
    subtitle: "Infrastructure",
    description: "Configure voice infrastructure and obtain calling numbers.",
    icon: Building2,
    status: "completed",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Voice account setup provisions your calling infrastructure, including virtual numbers, SIP trunks, and call routing configuration.",
      whyExists: "Proper infrastructure ensures call quality, reliability, and compliance with telecom regulations.",
      beforeStep: "Business verification is complete.",
      afterStep: "Voice numbers are provisioned and ready for IVR setup.",
      hyperlinkHandles: [
        "Number procurement",
        "SIP trunk configuration",
        "CLI (Caller ID) setup",
        "Network quality optimization",
      ],
      customerHandles: [
        "Choose number type (local, toll-free)",
        "Approve number selection",
        "Provide CLI preferences",
      ],
      compliance: [
        "Numbers must be registered per telecom rules",
        "CLI must accurately represent business",
        "International calling requires additional verification",
      ],
      timeline: "1-3 business days for number provisioning.",
      failures: "Number availability varies by region. We provide alternatives quickly.",
    },
  },
  {
    id: "ivr-design",
    title: "IVR Flow Design",
    subtitle: "Call Logic",
    description: "Design your interactive voice response flow and menu structure.",
    icon: Workflow,
    status: "completed",
    handledBy: "both",
    details: {
      whatIsThis: "IVR design defines the call flow—greeting, menu options, routing logic, and actions based on caller input.",
      whyExists: "Well-designed IVR improves caller experience and routes calls efficiently to the right destination.",
      beforeStep: "Voice account is set up.",
      afterStep: "IVR is ready for voice and audio configuration.",
      hyperlinkHandles: [
        "Visual IVR builder",
        "Flow logic validation",
        "Best practice templates",
        "A/B testing framework",
      ],
      customerHandles: [
        "Define menu options and routing",
        "Write voice prompts",
        "Set business hours and fallbacks",
        "Test call flows",
      ],
      compliance: [
        "Must provide option to speak with human",
        "Call recording requires disclosure",
        "DND preferences must be checked",
      ],
      timeline: "IVR design can be done in hours. Complex flows take longer.",
      failures: "Complex IVR can confuse callers. We help optimize for user experience.",
    },
  },
  {
    id: "voice-config",
    title: "Voice Configuration",
    subtitle: "Audio & TTS",
    description: "Configure voice prompts with text-to-speech or recorded audio.",
    icon: Mic,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "Voice configuration sets up the audio callers hear—either AI-generated text-to-speech or professionally recorded audio files.",
      whyExists: "High-quality audio creates professional impressions and clear communication with callers.",
      beforeStep: "IVR flow is designed.",
      afterStep: "Voice system is ready for call handling setup.",
      hyperlinkHandles: [
        "Text-to-speech engine access",
        "Multiple voice options",
        "Audio file hosting",
        "Dynamic variable insertion",
      ],
      customerHandles: [
        "Write or approve prompt scripts",
        "Choose voice style (if TTS)",
        "Upload recorded audio (if preferred)",
        "Review audio quality",
      ],
      compliance: [
        "Audio must be clear and professional",
        "Legal disclaimers may be required",
        "Language options for accessibility",
      ],
      timeline: "TTS is instant. Recorded audio depends on production time.",
      failures: "Poor audio quality affects caller experience. We provide quality guidelines.",
    },
  },
  {
    id: "call-handling",
    title: "Call Handling Setup",
    subtitle: "Routing & Actions",
    description: "Configure call routing, transfers, and automated actions.",
    icon: PhoneForwarded,
    status: "active",
    handledBy: "both",
    details: {
      whatIsThis: "Call handling defines what happens with calls—transfers to agents, voicemail, callback scheduling, or automated actions.",
      whyExists: "Effective call handling ensures callers reach the right destination and actions are completed.",
      beforeStep: "Voice prompts are configured.",
      afterStep: "System is ready for campaign launch.",
      hyperlinkHandles: [
        "DTMF input handling",
        "Smart routing algorithms",
        "Queue management",
        "Voicemail transcription",
      ],
      customerHandles: [
        "Define routing rules",
        "Set up agent endpoints",
        "Configure fallback options",
        "Test end-to-end flows",
      ],
      compliance: [
        "Call recording requires consent",
        "Hold music licensing considerations",
        "Transfer announcements required",
      ],
      timeline: "Configuration is fast. Integration with external systems may take longer.",
      failures: "Misconfigured routing leads to caller frustration. We help validate flows.",
    },
  },
  {
    id: "campaign-launch",
    title: "Campaign Launch",
    subtitle: "Outbound Calls",
    description: "Launch outbound voice campaigns with automation.",
    icon: Send,
    status: "pending",
    handledBy: "customer",
    details: {
      whatIsThis: "Outbound campaigns automatically dial numbers and deliver voice messages or connect to IVR flows.",
      whyExists: "Automated outbound calling scales voice communications for notifications, surveys, and follow-ups.",
      beforeStep: "All voice configuration is complete.",
      afterStep: "Calls are being made and interactions tracked.",
      hyperlinkHandles: [
        "Parallel calling capability",
        "Answering machine detection",
        "Retry logic for unanswered calls",
        "Pace control for compliance",
      ],
      customerHandles: [
        "Prepare call list",
        "Schedule campaign",
        "Monitor call progress",
        "Review outcomes",
      ],
      compliance: [
        "DND checking is mandatory",
        "Time-of-day restrictions apply",
        "Consent required for marketing calls",
        "Robocall regulations must be followed",
      ],
      timeline: "Campaigns start immediately on schedule.",
      failures: "Low answer rates are common. AMD helps optimize live call connections.",
    },
  },
  {
    id: "interactions",
    title: "Call Interactions",
    subtitle: "Engagement",
    description: "Handle caller interactions, inputs, and responses.",
    icon: Users,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Real-time handling of caller interactions—keypad inputs, speech recognition, and dynamic responses.",
      whyExists: "Interactive calls enable two-way communication and data collection.",
      beforeStep: "Calls are connected.",
      afterStep: "Interaction data is logged for analytics.",
      hyperlinkHandles: [
        "DTMF capture and processing",
        "Speech-to-text for voice input",
        "Dynamic response generation",
        "Real-time data logging",
      ],
      customerHandles: [
        "Monitor live calls if needed",
        "Handle escalations to humans",
      ],
      compliance: [
        "Input data must be handled securely",
        "PCI compliance for payment info",
        "Call recordings stored securely",
      ],
      timeline: "Real-time processing.",
      failures: "Recognition errors happen. We provide fallback options.",
    },
  },
  {
    id: "analytics",
    title: "Call Analytics",
    subtitle: "Performance",
    description: "Track call outcomes, durations, and campaign performance.",
    icon: BarChart3,
    status: "pending",
    handledBy: "hyperlink",
    details: {
      whatIsThis: "Comprehensive call analytics including answer rates, call durations, IVR navigation paths, and conversion metrics.",
      whyExists: "Analytics help optimize IVR flows, improve answer rates, and measure campaign effectiveness.",
      beforeStep: "Calls complete and data is processed.",
      afterStep: "Insights inform optimization.",
      hyperlinkHandles: [
        "Real-time call dashboards",
        "Historical trend analysis",
        "IVR path analysis",
        "Conversion tracking",
        "Call recording access",
      ],
      customerHandles: [
        "Review performance metrics",
        "Analyze call recordings",
        "Optimize based on data",
      ],
      compliance: [
        "Call recordings have retention limits",
        "Analytics respect privacy",
        "Audit trails maintained",
      ],
      timeline: "Real-time data with historical analysis.",
      failures: "Analytics are reliable. Data is never lost.",
    },
  },
];

export default function Voice() {
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-voice">Voice & IVR</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-voice/20 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-voice" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Voice & IVR
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8 animate-fade-up stagger-1">
                Programmable voice calls, interactive voice response, 
                and intelligent call routing for enterprise communications.
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
                <h3 className="font-semibold text-primary-foreground mb-4">Voice Capabilities</h3>
                <ul className="space-y-3">
                  {[
                    "Text-to-speech with natural voices",
                    "Visual IVR builder",
                    "DTMF and speech input",
                    "Call recording and transcription",
                    "Answering machine detection",
                    "Call analytics and reporting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-primary-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-voice mt-0.5 shrink-0" />
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
              Voice Implementation Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              From infrastructure setup to automated call campaigns. Click any step for details.
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
                Voice at Enterprise Scale
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Automate voice communications for notifications, surveys, 
                reminders, and customer engagement.
              </p>
              <ul className="space-y-3">
                {[
                  "Cloud-based voice infrastructure",
                  "Visual IVR flow builder",
                  "Natural text-to-speech voices",
                  "Comprehensive call analytics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-voice" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptInForm
              variant="hero"
              title="Get Started with Voice"
              subtitle="Build intelligent voice experiences for your customers."
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
