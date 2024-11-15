import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current },
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0]{
  videoID,
  heroText
}`;

export const SUSTAINABILITY_SECTION_QUERY = `*[_type == "sustainabilitySection"][0]{
  bgImage {
    asset->{
      _id,
      url
    },
    alt
  },
  sustainText
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

const CAFE_QUERY = groq`*[_type == "cafeSection"][0] {
  cafeImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  title,
  content,
  hoverLinkText,
  hoverLinkHref,
  meta {
    title,
    description
  }
}`;

export const OURSERVICES_QUERY = groq`*[_type == "ourServices"][0]{
  title,
  "image": image.asset->url,
  content
}`;

export const SERVICES_QUERY = groq`*[_type == "service" && isActive == true]{
  title,
  "slug": slug.current,
  "image": image.asset->url,
  "altText": image.alt,
  content
}`;

export const SERVICES_SLUG_QUERY = groq`*[_type == "service" && isActive == true && defined(slug.current)] {
  "params": {"slug": slug.current}
}`;

export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "hero_image": hero_image.asset->url,
    "altText": image.alt,
    meta {
    title,
    description
  },
    content,
    "treatments": *[_type == "treatment" && references(^._id)]{
      _id,
      title,
      "slug": treatmentSlug.current
    }
  }
`;

export const TREATMENTS_QUERY = groq`*[_type == "treatment" && isActive == true]{
  title,
  "treatmentSlug": treatmentSlug.current,
  "service": service->{
    title,
    "slug": slug.current
  },
  "image": image.asset->url,
  "altText": image.alt,
  content,

}`;

export const METADATAS_QUERY = groq`*[_type == "metadatas"]{
  datas
}`;

export const METADATASone_QUERY = groq`*[_type == "metadatas"][0]{
  datas
}`;

export const MetaData_Slug = groq`*[_type == "metadatas" && defined(slug.current) ][0]{
  "params": {"slug": slug.current}
}`;

// export const METADATA_BY_SLUG_QUERY = groq`
//   *[_type == "metadatas"]{
//     datas[slug.current == $slug]{
//       title,
//       description
//     }
//   }
// `;

export const METADATA_BY_SLUG_QUERY = groq`
  *[_type == "metadatas"]{
    "meta":datas[slug.current == $slug][0]{
      title,
      description
    } 
  }[0]
`;

export const ANOTHERMETADATA_BY_SLUG_QUERY = groq`
  *[_type == "metadatas" && datas[slug.current == $slug][0]]{
      title,
      description
    } 
  
`;

export const TREATMENTS_SLUG_QUERY = groq`*[_type == "treatment" && isActive == true && defined(treatmentSlug.current)]{
  "slug": service->slug.current,
  "treatmentSlug": treatmentSlug.current
}`;

export const TREATMENT_BY_SLUG_QUERY = groq`
  *[_type == "treatment" && treatmentSlug.current == $treatmentSlug][0]{
    title,
    "treatmentSlug": treatmentSlug.current,
    service->{
      title,
      slug
    },
    "aboveImage": aboveImage.asset->url,
    "altText": image.alt,
    heroSubtitle,
    heroContent,
    quoteContent,
    leftSubtitle,
    leftContent,
    "rightImage": rightImage.asset->url,
    rightSubtitle,
    rightContent,
    "leftImage": leftImage.asset->url,
    greenTitle,
    greenContent,
    writtenTitle,
    writtenContent,
    "writtenImage": writtenImage.asset->url,
    writtenBracketContent,
    framesTitle,
    frames[]{
      title,
      content,
    meta {
      title,
      description
    }
    }
  }
`;

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0] {
    contactInfo {
      sectionTitle,
      details[] {
        label,
        value
      }
    },
    servicesSection[]-> {
      title,
      "slug": slug.current,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    sections[] {
      title,
      links[] {
        text,
        href
      }
    },
    socialLinksSection {
      title,
      links[] {
        platform,
        url
      }
    },
    privacy {
      links[] {
        title,
        href
      }
    }
  }
`;

export const PRODUCTS_SECTION_QUERY = groq`*[_type == "productsSection"][0]{
  sectionTitle,
  hoverLinkText,
  hoverLinkHref
}`;

export const PRODUCTS_QUERY = groq`*[_type == "product" && isActive == true] {
  title,
  indepthblockinfo,
  description,
  "slug" : slug.current,
  "banner": banner.asset->url,
  "image": image.asset->url,
  "altText": image.alt,
  meta {
    title,
    description
  }
}`;

export const PRODUCT_QUERY = groq`*[_type == "product" && slug.current == $slug][0]`;

export const PRODUCT_SLUG_QUERY = groq`*[_type == "product" && isActive == true && defined(slug.current)] {
  "params": {"slug": slug.current}
}`;

export const NAVIGATION_QUERY = groq`*[_type == "navigation"][0]{
  serviceLinks[]->{
    title,
    "slug": slug.current
  },
  navItems[]{
    linkText,
    href,
    isServiceLinks
  }
}`;

export const TERMS_OF_USE_QUERY = groq`*[_type == "termOfUse"][0] {
  title,
  content,
  meta {
    title,
    description
  }
}`;

export const PRIVACY_QUERY = groq`*[_type == "privacy"][0] {
  title,
  content,
  meta {
    title,
    description
  }
}`;

export const ACCESSIBILITY_QUERY = groq`*[_type == "accessibility"][0] {
  title,
  content,
  meta {
    title,
    description
  }
}`;

export const SURVEY_LINK_QUERY = groq`*[_type == "surveyLink"][0]{
  bgImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  cta,
  youformId,
  content,
  bold,
  meta {
    title,
    description
  }
}`;

export const POPUP_CONTENT_QUERY = groq`*[_type == "popup" && isActive == true][0]{
  title,
  content,
  isActive,
}`;

export const HOME_PAGE_QUERY = groq`{
  "heroSection": ${HERO_SECTION_QUERY},
  "posts": ${POSTS_QUERY}{
    mainImage,
    title,
    excerpt,
    slug,
    publishedAt
  },
  "highlightSection": ${HIGHLIGHT_QUERY},
  "clinicSection": ${CLINIC_QUERY},
  "cafeSection": ${CAFE_QUERY},
  "services": ${SERVICES_QUERY},
  "footer": ${FOOTER_QUERY},
  "productsSection": ${PRODUCTS_SECTION_QUERY},
  "products": ${PRODUCTS_QUERY},
  "sustainabilitySection": ${SUSTAINABILITY_SECTION_QUERY},
  "surveyLink": ${SURVEY_LINK_QUERY},
  "navigation": ${NAVIGATION_QUERY},
  "termsOfUse": ${TERMS_OF_USE_QUERY},
  "privacy": ${PRIVACY_QUERY},
  "accessibility": ${ACCESSIBILITY_QUERY},
  "popup": ${POPUP_CONTENT_QUERY},
  
}`;

export const CONTACT_INFO_QUERY = groq`*[_type == "contactInfo"][0]{
  streetAddress,
  postalAddress,
  emailAddress,
  phoneNumber,
  "contactInfoImage": {
    "asset": contactInfoImage.asset->{
      _id,
      url
    },
    "alt": contactInfoImage.alt
  },
  meta {
    title,
    description
  },
  hrefDirections
}`;

export const CONTACT_DETAILS_QUERY = groq`*[_type == "contactDetails"][0]{
  title,
  monHours,
  tuesHours,
  wedHours,
  thursHours,
  friHours,
  satHours,
  sunHours,
  mapURL,
  cta,
  href
}`;

export const CONTACT_PAGE_QUERY = groq`{
  "contactInfo": ${CONTACT_INFO_QUERY},
  "contactDetails": ${CONTACT_DETAILS_QUERY},
  "footer": ${FOOTER_QUERY},
  "navigation": ${NAVIGATION_QUERY},
  "surveyLink": ${SURVEY_LINK_QUERY}
}`;
