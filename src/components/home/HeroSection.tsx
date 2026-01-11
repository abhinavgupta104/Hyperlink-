import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import heroLogo from "@/assets/hyperlink-sms-logo-hero.png";

const heroCards = [
  {
    headline: "100% SMS Delivery. Guaranteed.",
    subtext: [
      "Promotional and transactional bulk SMS",
      "delivered through trusted, operator-grade routes."
    ],
    footer: "No Payment Required",
  },
  {
    headline: "Delivery Cut-Off System Explained",
    subtext: [
      "Some providers submit only part of your SMS to operators",
      "while showing fake delivery reports. We don't."
    ],
    footer: "Full Submission • Real DLRs",
  },
  {
    headline: "200% Money-Back Guarantee",
    subtext: [
      "If your SMS is not delivered or falsely marked as delivered,",
      "we refund double what you paid."
    ],
    footer: "Zero Risk Policy",
  },
  {
    headline: "Industry Awareness Notice",
    subtext: [
      "Many low-cost SMS providers operate below industry standards",
      "by cutting delivery quality."
    ],
    footer: "Choose Transparency",
  },
];

interface HeroCardProps {
  headline: string;
  subtext: string[];
  footer: string;
  isActive: boolean;
  index: number;
}

function HeroCard({ headline, subtext, footer, isActive, index }: HeroCardProps) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);

  return (
    <div
      className={cn(
        "relative bg-card rounded-[18px] p-6 md:p-8 transition-all duration-500 ease-out",
        "border border-border/50",
        "shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.08)]",
        isActive ? "scale-100 opacity-100" : "scale-[0.95] opacity-60"
      )}
      style={{ minHeight: "280px" }}
    >
      {/* Subtle accent indicator */}
      <div 
        className="absolute top-5 left-6 w-2 h-2 rounded-full bg-primary/60"
        style={{ 
          animationDelay: `${index * 100}ms`,
        }}
      />

      <div className="pt-4 flex flex-col h-full justify-between">
        {/* Headline */}
        <div>
          <h2
            key={`headline-${animationKey}`}
            className={cn(
              "text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-4",
              isActive && "animate-hero-headline"
            )}
          >
            {headline}
          </h2>

          {/* Subtext - line by line */}
          <div className="space-y-1">
            {subtext.map((line, lineIndex) => (
              <p
                key={`line-${animationKey}-${lineIndex}`}
                className={cn(
                  "text-sm md:text-base text-muted-foreground leading-relaxed",
                  isActive && "animate-hero-subtext"
                )}
                style={{
                  animationDelay: isActive ? `${200 + lineIndex * 100}ms` : "0ms",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p
          key={`footer-${animationKey}`}
          className={cn(
            "text-xs md:text-sm font-medium text-primary/80 mt-6 tracking-wide",
            isActive && "animate-hero-footer"
          )}
        >
          {footer}
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            animation: "float-slow 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.025] blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            bottom: "20%",
            right: "15%",
            animation: "float-slow 30s ease-in-out infinite reverse",
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-enterprise relative z-10 py-12 md:py-20">
        {/* Split Layout: Logo Left, Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Big Logo */}
          <div className="flex flex-col items-center lg:items-start justify-center order-2 lg:order-1">
            <img 
              src={heroLogo} 
              alt="Hyperlink SMS" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
            <p className="mt-6 text-muted-foreground text-center lg:text-left text-lg md:text-xl max-w-md">
              Enterprise-grade SMS infrastructure with guaranteed delivery
            </p>
          </div>

          {/* Right Side - Card Carousel */}
          <div className="relative order-1 lg:order-2">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {heroCards.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 md:pl-4 basis-[90%] md:basis-[85%]"
                  >
                    <HeroCard
                      headline={card.headline}
                      subtext={card.subtext}
                      footer={card.footer}
                      isActive={current === index}
                      index={index}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows - show on hover */}
              <button
                onClick={scrollPrev}
                className={cn(
                  "absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20",
                  "w-9 h-9 md:w-10 md:h-10 rounded-full",
                  "bg-card/90 backdrop-blur-sm border border-border/50",
                  "flex items-center justify-center",
                  "text-foreground/60 hover:text-foreground hover:bg-card",
                  "transition-all duration-300 ease-out",
                  "shadow-md hover:shadow-lg",
                  isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                )}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={scrollNext}
                className={cn(
                  "absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20",
                  "w-9 h-9 md:w-10 md:h-10 rounded-full",
                  "bg-card/90 backdrop-blur-sm border border-border/50",
                  "flex items-center justify-center",
                  "text-foreground/60 hover:text-foreground hover:bg-card",
                  "transition-all duration-300 ease-out",
                  "shadow-md hover:shadow-lg",
                  isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                )}
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "relative h-2 rounded-full transition-all duration-300 ease-out",
                    current === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes hero-headline {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-subtext {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-footer {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-hero-headline {
          animation: hero-headline 280ms ease-out forwards;
        }

        .animate-hero-subtext {
          opacity: 0;
          animation: hero-subtext 280ms ease-out forwards;
        }

        .animate-hero-footer {
          opacity: 0;
          animation: hero-footer 300ms ease-out 400ms forwards;
        }
      `}</style>
    </section>
  );
}
