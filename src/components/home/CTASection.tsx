import { OptInForm } from "@/components/ui/OptInForm";

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business Messaging?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a personalized demo and see how Hyperlink can handle your 
              messaging needs with complete compliance and reliability.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Free consultation call</p>
                  <p className="text-sm text-muted-foreground">Understand your requirements and get expert advice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Custom pricing</p>
                  <p className="text-sm text-muted-foreground">Volume-based pricing tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Dedicated support</p>
                  <p className="text-sm text-muted-foreground">White-glove onboarding and ongoing assistance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <OptInForm
              variant="hero"
              title="Request a Demo"
              subtitle="Fill out the form and our team will reach out within 24 hours."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
