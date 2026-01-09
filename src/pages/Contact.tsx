import { Layout } from "@/components/layout/Layout";
import { OptInForm } from "@/components/ui/OptInForm";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@hyperlink.com",
    href: "mailto:hello@hyperlink.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/1234567890",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Enterprise Tower, Tech District",
    href: null,
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed animate-fade-up stagger-1">
              Ready to transform your messaging operations? Our team is here 
              to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out through any channel. Our team typically responds within 24 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="card-enterprise">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Technical support available 24/7 for enterprise clients
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <OptInForm
                variant="hero"
                title="Request a Demo"
                subtitle="Fill out the form below and our team will reach out within 24 hours to schedule your personalized demo."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Here are some frequently asked questions. Can't find what you're looking for? Get in touch.
            </p>

            <div className="text-left space-y-6">
              {[
                {
                  q: "How long does onboarding take?",
                  a: "Typical onboarding takes 3-5 business days for DLT registration and setup. We expedite this process through our carrier relationships.",
                },
                {
                  q: "Do you handle DLT compliance?",
                  a: "Yes, we handle complete DLT registration including Principal Entity, Sender ID, and template approvals on your behalf.",
                },
                {
                  q: "What are your messaging rates?",
                  a: "We offer volume-based pricing tailored to your needs. Contact our sales team for a custom quote.",
                },
                {
                  q: "Can I try before committing?",
                  a: "Yes, we offer a demo environment and pilot program for enterprise clients to test our platform.",
                },
              ].map((faq) => (
                <div key={faq.q} className="card-enterprise">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
