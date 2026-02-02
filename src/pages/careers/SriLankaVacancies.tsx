import { Layout } from "@/components/layout/Layout";
import { CareersPageTemplate } from "@/components/careers/CareersPageTemplate";

const SriLankaVacancies = () => {
  return (
    <Layout>
      <CareersPageTemplate
        pageTitle="Sri Lanka Opportunities"
        pageDescription="Explore exciting career opportunities in Sri Lanka"
        location="Colombo"
        backLink="/careers"
      />
    </Layout>
  );
};

export default SriLankaVacancies;
