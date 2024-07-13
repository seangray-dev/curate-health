import Blog from 'components/layout/Home/Blog';
import Clinic from 'components/layout/Home/Clinic';
import ComingSoon from 'components/layout/Home/ComingSoon';
import CurateCafe from 'components/layout/Home/CurateCafe';
import Hero from 'components/layout/Home/Hero';
import Highlight from 'components/layout/Home/Highlight';
import Products from 'components/layout/Home/Products';
import Services from 'components/layout/Home/Services';
import SurveyLink from 'components/layout/Survey/SurveyLink';
import Sustainability from 'components/layout/Home/Sustainability';
import Newsletter from 'components/layout/Home/TEMP-Newsletter';
import Layout from 'components/layout/layout';
import { SanityDocument } from 'next-sanity';
import dynamic from 'next/dynamic';
import { getClient } from '../sanity/lib/client';
import { HOME_PAGE_QUERY } from '../sanity/lib/queries';
import { token } from '../sanity/lib/token';

type PageProps = {
  posts: SanityDocument[];
  heroSection: SanityDocument[];
  highlightSection: SanityDocument[];
  clinicSection: SanityDocument[];
  cafeSection: SanityDocument[];
  services: SanityDocument[];
  footer: SanityDocument[];
  productsSection: SanityDocument[];
  products: SanityDocument[];
  draftMode: boolean;
  token: string;
  sustainabilitySection: SanityDocument[];
  surveyLink: SanityDocument[];
  navigation: SanityDocument[];
};

export default function Index(props: PageProps) {
  const HomePreview = dynamic(
    () => import('../components/layout/Home/HomePreview')
  );

  if (props.draftMode) {
    return <HomePreview />;
  }

  const comingSoon = true;

  if (comingSoon) {
    return (
      <main className='flex flex-col min-h-screen justify-center items-center text-white gap-16'>
        <ComingSoon />
        <Newsletter />
      </main>
    );
  }

  return (
    <Layout title={'Home'} navigation={props.navigation} footer={props.footer}>
      <Hero heroSection={props.heroSection} />
      <Highlight highlightSection={props.highlightSection} />
      <Clinic clinicSection={props.clinicSection} />
      <Services services={props.services} />
      <Products
        productsSection={props.productsSection}
        products={props.products}
      />
      <CurateCafe cafeSection={props.cafeSection} />
      <Blog posts={props.posts} />
      <Sustainability sustainabilitySection={props.sustainabilitySection} />
      <SurveyLink surveyLink={props.surveyLink} />
      <Newsletter />
    </Layout>
  );
}

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined);
  const allData = await client.fetch(HOME_PAGE_QUERY);

  return {
    props: {
      ...allData,
      draftMode,
      token: draftMode ? token : '',
    },
  };
};
