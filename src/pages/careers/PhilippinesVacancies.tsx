import { Layout } from "@/components/layout/Layout";
import { CareersPageTemplate } from "@/components/careers/CareersPageTemplate";

const PhilippinesVacancies = () => {
  return (
    <Layout>
      <CareersPageTemplate
        pageTitle="Philippines Opportunities"
        pageDescription="Explore exciting career opportunities in the Philippines"
        location="Manila"
        backLink="/careers"
      />
    </Layout>
  );
};

export default PhilippinesVacancies;
