import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container-enterprise relative">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Enterprise-Grade Messaging Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
              The Complete Platform for{" "}
              <span className="text-accent">Enterprise Messaging</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed animate-fade-up stagger-2">
              From bulk SMS to RCS, WhatsApp automation to voice systems. 
              One platform, complete compliance, infinite scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up stagger-3">
              <Link to="/contact" className="btn-accent text-base px-8 py-4 group">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/how-it-works" className="btn-outline border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8 py-4">
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up stagger-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">DLT Compliant</p>
                  <p className="text-sm text-primary-foreground/60">Full regulatory coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">99.9% Uptime</p>
                  <p className="text-sm text-primary-foreground/60">Enterprise reliability</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Global Reach</p>
                  <p className="text-sm text-primary-foreground/60">190+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100V50C360 0 720 0 1080 50C1260 75 1380 87.5 1440 100H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}
