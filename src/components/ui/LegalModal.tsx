import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, Globe, Lock } from "lucide-react";
import { useEffect, useRef } from "react";

interface LegalModalProps {
  type: "privacy" | "terms" | "dlt" | "gdpr" | null;
  isOpen: boolean;
  onClose: () => void;
}

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    icon: Lock,
    content: `
## Privacy Policy

**Last Updated: January 2025**

### 1. Information We Collect

Hyperlink SMS collects information you provide directly, including:
- **Account Information**: Name, email, phone number, company details
- **Payment Information**: Billing address, payment method details
- **Communication Data**: Messages sent through our platform, delivery logs
- **Usage Data**: How you interact with our services

### 2. How We Use Your Information

We use collected information to:
- Provide and maintain our messaging services
- Process transactions and send billing notifications
- Improve and personalize our services
- Comply with legal obligations and regulatory requirements
- Communicate service updates and marketing (with consent)

### 3. Data Sharing

We may share data with:
- **Service Providers**: Telecom carriers, payment processors
- **Legal Requirements**: When required by law or regulation
- **Business Transfers**: In case of merger or acquisition

We **never** sell your personal data to third parties.

### 4. Data Security

We implement industry-standard security measures:
- End-to-end encryption for data in transit
- AES-256 encryption for data at rest
- Regular security audits and penetration testing
- SOC 2 Type II certification

### 5. Data Retention

We retain data for the period necessary to:
- Fulfill the purposes outlined in this policy
- Comply with regulatory requirements (typically 7 years for messaging logs)
- Resolve disputes and enforce agreements

### 6. Your Rights

You have the right to:
- Access your personal data
- Correct inaccurate data
- Request deletion (subject to legal requirements)
- Export your data
- Opt-out of marketing communications

### 7. Contact Us

For privacy inquiries: privacy@hyperlinksms.com
    `,
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    content: `
## Terms of Service

**Last Updated: January 2025**

### 1. Acceptance of Terms

By accessing or using Hyperlink SMS services, you agree to be bound by these Terms of Service.

### 2. Service Description

Hyperlink SMS provides enterprise messaging services including:
- Bulk SMS messaging
- RCS messaging
- WhatsApp Business API
- Voice and IVR services
- OTP and transactional messaging

### 3. Account Responsibilities

You are responsible for:
- Maintaining account security
- All activity under your account
- Compliance with applicable laws
- Obtaining proper consent from message recipients
- Accurate registration information

### 4. Acceptable Use

You agree NOT to:
- Send spam or unsolicited messages
- Violate any laws or regulations
- Infringe intellectual property rights
- Transmit malicious content
- Circumvent technical restrictions

### 5. DLT Compliance (India)

For India operations:
- You must complete DLT registration
- All sender IDs must be approved
- Message templates require pre-approval
- Consent records must be maintained

### 6. Pricing and Payment

- Pricing is based on usage and volume tiers
- Invoices are due within 30 days
- Late payments may incur interest
- Services may be suspended for non-payment

### 7. Service Level Agreement

We commit to:
- 99.9% platform uptime
- Sub-5-second message delivery (typical)
- 24/7 technical support for enterprise clients

### 8. Limitation of Liability

Hyperlink SMS liability is limited to fees paid in the preceding 12 months.

### 9. Termination

Either party may terminate with 30 days written notice. We may terminate immediately for violation of these terms.

### 10. Governing Law

These terms are governed by the laws of [Jurisdiction].

### Contact

Legal inquiries: legal@hyperlinksms.com
    `,
  },
  dlt: {
    title: "DLT Compliance",
    icon: Shield,
    content: `
## DLT (Distributed Ledger Technology) Compliance

**TRAI Regulations for Commercial Messaging in India**

### What is DLT?

DLT is a blockchain-based regulatory framework mandated by TRAI (Telecom Regulatory Authority of India) for all commercial SMS communication. It ensures transparency, traceability, and accountability in commercial messaging.

### Key Requirements

#### 1. Principal Entity Registration
- Business must register as a Principal Entity on DLT platform
- Valid business documents required (GST, PAN, COI)
- One-time registration process
- Hyperlink handles this on your behalf

#### 2. Sender ID (Header) Registration
- 6-character alphanumeric sender IDs
- Must relate to business name
- Approval required from telecom operators
- Different headers for different use cases

#### 3. Template Registration
All message templates must be:
- Pre-registered and approved
- Categorized correctly (Transactional, Promotional, Service)
- Content scrubbed before delivery

#### 4. Consent Management
- Explicit consent required for promotional messages
- Consent records must be maintained
- Opt-out mechanisms mandatory

### Message Categories

| Category | Description | Time Restrictions |
|----------|-------------|-------------------|
| Transactional | Bank alerts, OTP | 24/7 allowed |
| Service | Booking confirmations | 24/7 allowed |
| Promotional | Marketing offers | 9 AM - 9 PM only |

### DND (Do Not Disturb) Compliance

- NDNC registry must be checked
- DND numbers blocked for promotional content
- Transactional messages exempt

### Penalties for Non-Compliance

- Message blocking by carriers
- Sender ID suspension
- Financial penalties
- Legal action

### How Hyperlink Helps

We handle complete DLT compliance:
✓ Principal Entity registration
✓ Sender ID procurement and approval
✓ Template registration and management
✓ Real-time DLT scrubbing
✓ Consent record maintenance
✓ Compliance monitoring and alerts
    `,
  },
  gdpr: {
    title: "GDPR Compliance",
    icon: Globe,
    content: `
## GDPR Compliance

**General Data Protection Regulation Compliance**

### Our Commitment

Hyperlink SMS is fully committed to GDPR compliance for processing personal data of EU residents.

### Data Processing Roles

- **Data Controller**: You (our customer) determine the purposes of processing
- **Data Processor**: Hyperlink SMS processes data on your behalf
- Data Processing Agreements available upon request

### Lawful Basis for Processing

We support these lawful bases:
1. **Consent**: Explicit opt-in for marketing
2. **Contract**: Transactional messages for service delivery
3. **Legitimate Interest**: Service notifications
4. **Legal Obligation**: Regulatory compliance

### Data Subject Rights

We enable you to fulfill these rights:

| Right | Description | Our Support |
|-------|-------------|-------------|
| Access | View personal data | Data export tools |
| Rectification | Correct data | Self-service updates |
| Erasure | Delete data | Deletion workflows |
| Portability | Export data | Standard formats |
| Objection | Opt-out | Preference center |

### Technical Measures

**Security**:
- End-to-end encryption
- Access controls and audit logs
- Regular security assessments

**Privacy by Design**:
- Data minimization
- Purpose limitation
- Storage limitation

### Data Transfer

For international transfers:
- Standard Contractual Clauses (SCCs)
- EU-approved mechanisms
- Transfer impact assessments

### Breach Notification

In case of a data breach:
- Notification within 72 hours
- Impact assessment
- Remediation measures
- Regulatory reporting as required

### Data Protection Officer

Contact our DPO:
dpo@hyperlinksms.com

### Documentation

We maintain:
- Records of processing activities
- Data Protection Impact Assessments
- Consent records
- Processing agreements

### Your Responsibilities

As our customer, you must:
- Have lawful basis for processing
- Obtain valid consent where required
- Honor data subject requests
- Report breaches promptly
    `,
  },
};

export function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen, type]);

  if (!type) return null;

  const content = legalContent[type];
  const Icon = content.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-border bg-secondary/50">
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            {content.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] px-6 py-4" ref={scrollRef}>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <div 
              className="text-foreground"
              dangerouslySetInnerHTML={{ 
                __html: content.content
                  .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-foreground mt-6 mb-3">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-foreground mt-5 mb-2">$1</h3>')
                  .replace(/^#### (.*$)/gm, '<h4 class="text-base font-semibold text-foreground mt-4 mb-2">$1</h4>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                  .replace(/^- (.*$)/gm, '<li class="text-muted-foreground ml-4 list-disc">$1</li>')
                  .replace(/^✓ (.*$)/gm, '<li class="text-muted-foreground ml-4 flex items-center gap-2"><span class="text-accent">✓</span>$1</li>')
                  .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-3">')
                  .replace(/\|(.+)\|/g, (match) => {
                    const cells = match.split('|').filter(Boolean);
                    return `<tr>${cells.map(c => `<td class="border border-border px-3 py-2 text-sm text-muted-foreground">${c.trim()}</td>`).join('')}</tr>`;
                  })
              }} 
            />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
