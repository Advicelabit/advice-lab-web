import { Layout } from "@/components/layout/Layout";
import { TopBanner } from "@/components/home/TopBanner";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <Layout>
      <TopBanner />
      <HeroSlider />
      <ClientLogos />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
