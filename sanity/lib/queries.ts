import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const heroSectionQuery = `*[_type == "heroSection"][0]{
  bgImage {
    asset->{
      _id,
      url
    },
  },
  heroText
}`;

const HIGHLIGHT_QUERY = groq`*[_type == "highlight"][0]{
  title1,
  title2,
  "highlightImage": {
    "asset": highlightImage.asset->{
      _id,
      url
    },
    "alt": highlightImage.alt
  },
  hoverLinkText,
  hoverLinkHref
}`;

const CLINIC_QUERY = groq`*[_type == "clinic"][0]{
  "clinicImage": clinicImage.asset->{
    _id,
    url
  },
  content
}`;

export const SERVICES_QUERY = groq`*[_type == "service" && isActive == true]{
  title,
  "slug": slug.current,
  "image": image.asset->url,
  "altText": image.alt,
  content
}`;

export const SERVICES_SLUG_QUERY = `*[_type == "service" && isActive == true && defined(slug.current)] {
  "params": {"slug": slug.current}
}`;

export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "altText": image.alt,
    content
  }
`;

export const PRODUCTS_SECTION_QUERY = groq`*[_type == "productsSection"][0]{
  sectionTitle,
  hoverLinkText,
  hoverLinkHref
}`;

export const PRODUCTS_QUERY = groq`*[_type == "product" && isActive == true] {
  title,
  description,
  "image": image.asset->url,
  "altText": image.alt
  }
`;

export const homePageQuery = groq`{
  "heroSection": ${heroSectionQuery},
  "posts": ${POSTS_QUERY}{
    mainImage,
    title,
    excerpt,
    slug,
    publishedAt,
  },
  "highlightSection": ${HIGHLIGHT_QUERY},
  "clinicSection": ${CLINIC_QUERY},
  "services": ${SERVICES_QUERY},
  "productsSection": ${PRODUCTS_SECTION_QUERY},
  "products": ${PRODUCTS_QUERY}
}`;
