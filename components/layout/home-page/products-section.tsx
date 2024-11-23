import HoverLink from 'components/shared/hover-link';
import {
  PRODUCTS_QUERYResult,
  PRODUCTS_SECTION_QUERYResult,
} from 'sanity.types';
import { ProductCarousel } from './product-carousel';

export default function ProductsSection({
  productsSection,
}: {
  productsSection: PRODUCTS_SECTION_QUERYResult;
}) {
  if (!productsSection) {
    return null;
  }

  const { sectionTitle, hoverLinkText, hoverLinkHref, products } =
    productsSection;

  return (
    <section id='products' className='bg-white flex flex-col gap-10'>
      <div className='container pt-9'>
        <h2 className=' text-primary font-light md:text-4xl'>{sectionTitle}</h2>
      </div>
      <div className='container'>
        <ProductCarousel products={products} />
      </div>
      <HoverLink
        href={hoverLinkHref!}
        text={hoverLinkText!}
        textColor='text-black'
      />
    </section>
  );
}
