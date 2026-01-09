import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <HowItWorksPreview />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
