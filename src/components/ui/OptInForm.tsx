import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  company: z.string().min(2, "Company name must be at least 2 characters").max(100),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive communications",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface OptInFormProps {
  variant?: "default" | "hero" | "compact";
  title?: string;
  subtitle?: string;
}

export function OptInForm({ variant = "default", title, subtitle }: OptInFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch shortly.");
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
        <p className="text-muted-foreground">Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className={variant === "hero" ? "bg-card rounded-2xl p-8 shadow-xl border border-border" : ""}>
      {title && (
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-muted-foreground mb-6">{subtitle}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className={variant === "compact" ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
          <div>
            <Input
              placeholder="Full Name *"
              {...register("name")}
              className="h-12"
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Work Email *"
              {...register("email")}
              className="h-12"
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Phone Number *"
              {...register("phone")}
              className="h-12"
            />
            {errors.phone && (
              <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Company Name *"
              {...register("company")}
              className="h-12"
            />
            {errors.company && (
              <p className="text-xs text-destructive mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
          <Checkbox
            id="consent"
            {...register("consent")}
            className="mt-0.5"
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            I agree to receive communication from Hyperlink and accept all applicable messaging 
            regulations and policies, including{" "}
            <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> and{" "}
            <a href="/terms" className="text-accent hover:underline">Terms of Service</a>.
          </label>
        </div>
        {errors.consent && (
          <p className="text-xs text-destructive">{errors.consent.message}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 btn-accent"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request Demo"
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          No spam. Unsubscribe anytime. View our compliance documentation.
        </p>
      </form>
    </div>
  );
}
