import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  FileCheck, 
  Server,
  Eye,
  Key,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade infrastructure with redundancy, DDoS protection, and 24/7 monitoring.",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access control, API key management, and multi-factor authentication.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all actions, accessible for compliance reviews.",
  },
];

const complianceItems = [
  {
    id: "dlt",
    name: "TRAI DLT Compliance",
    description: "Full compliance with Telecom Regulatory Authority of India's Distributed Ledger Technology requirements for commercial messaging.",
    details: [
      "Principal Entity registration",
      "Sender ID approval process",
      "Template registration and management",
      "Consent record maintenance",
      "Header and content scrubbing",
    ],
  },
  {
    id: "gdpr",
    name: "GDPR Compliance",
    description: "Meeting European Union General Data Protection Regulation requirements for data privacy and protection.",
    details: [
      "Data processing agreements",
      "Right to erasure support",
      "Data portability",
      "Privacy by design",
      "Data breach notification",
    ],
  },
  {
    id: "iso",
    name: "ISO 27001 Certified",
    description: "Information Security Management System certification demonstrating our commitment to security best practices.",
    details: [
      "Risk assessment and management",
      "Security policy framework",
      "Asset management",
      "Access control procedures",
      "Incident management",
    ],
  },
  {
    id: "soc2",
    name: "SOC 2 Type II",
    description: "Independent audit verifying our controls for security, availability, and confidentiality.",
    details: [
      "Security controls verification",
      "Availability monitoring",
      "Processing integrity",
      "Confidentiality measures",
      "Privacy controls",
    ],
  },
];

export default function Security() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Security & Compliance
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed animate-fade-up stagger-1">
              Enterprise messaging demands enterprise security. We exceed industry 
              standards to protect your data and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple layers of security protecting your messaging operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-enterprise opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              We maintain compliance with major regulatory frameworks and industry standards.
            </p>
          </div>

          <div className="space-y-6">
            {complianceItems.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className="card-enterprise p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <FileCheck className="w-6 h-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key aspects:</h4>
                    <ul className="space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLT Deep Dive */}
      <section id="dlt" className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                DLT Compliance Explained
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                TRAI's Distributed Ledger Technology (DLT) is mandatory for all commercial 
                messaging in India. Here's what you need to know:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Principal Entity Registration</h4>
                    <p className="text-sm text-muted-foreground">Your business must be registered on the DLT blockchain with verified identity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sender ID & Template Approval</h4>
                    <p className="text-sm text-muted-foreground">All sender IDs and message templates must be pre-approved before use.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Content Scrubbing</h4>
                    <p className="text-sm text-muted-foreground">Every message is validated against approved templates before delivery.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h3 className="font-semibold text-amber-900">Important: DLT is Mandatory</h3>
              </div>
              <p className="text-amber-800 mb-6">
                Non-compliance with DLT regulations can result in:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Message blocking by carriers",
                  "Sender ID suspension",
                  "Regulatory penalties",
                  "Reputational damage",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-amber-700">
                <strong>Hyperlink handles DLT compliance for you.</strong> We manage registration, 
                approvals, and ongoing compliance so you can focus on your messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-enterprise text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have Security Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is available to discuss your compliance requirements and security concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-accent">
              Contact Security Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
