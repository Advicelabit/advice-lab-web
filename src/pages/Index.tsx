import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CustomizeSection } from "@/components/home/CustomizeSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ClientLogos />
      <ServicesOverview />
      <CustomizeSection />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
