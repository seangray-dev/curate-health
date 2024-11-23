import AboutSection from 'components/layout/home-page/about-section';
import ClinicSection from 'components/layout/home-page/clinic-section';
import HeroSection from 'components/layout/home-page/hero-section';
import ProductsSection from 'components/layout/home-page/products-section';
import ServicesSection from 'components/layout/home-page/services-section';
import Layout from 'components/shared/layout';
import { HOME_PAGE_QUERYResult } from '../sanity.types';
import { HOME_PAGE_QUERY } from '../sanity/lib/queries';
import { sanityFetch } from '../sanity/lib/server-client';

export default async function Home() {
  const homePage = await sanityFetch<HOME_PAGE_QUERYResult>({
    query: HOME_PAGE_QUERY,
  });

  const {
    layout,
    heroSection,
    primaryCTAButton,
    aboutSection,
    clinicSection,
    productsSection,
    products,
    servicesSection,
  } = homePage;

  return (
    <Layout layout={layout}>
      <HeroSection
        heroSection={heroSection}
        primaryCTAButton={primaryCTAButton}
      />
      <AboutSection aboutSection={aboutSection} />
      <ClinicSection clinicSection={clinicSection} />
      <ServicesSection servicesSection={servicesSection} />
      <ProductsSection productsSection={productsSection} products={products} />
    </Layout>
  );
}
