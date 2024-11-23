import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourStory',
  title: 'Our Story',
  type: 'document',
  fields: [
    defineField({
      name: 'headerBgImage',
      title: 'Our Story Header Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      description: 'Title of header section on page',
    }),
    defineField({
      name: 'headerSubtitle',
      title: 'Header Subtitle',
      type: 'string',
      description: 'Subtitle of header section on page',
    }),
    defineField({
      name: 'sectionOneImage',
      title: 'Section One Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionOneTitle',
      title: 'Title of Section One',
      type: 'string',
      description: 'The title of section one',
    }),
    defineField({
      name: 'sectionOneTextContent',
      title: 'Section One Text Content',
      type: 'string',
      description: 'The text content of section one',
    }),
    defineField({
      name: 'quotationMark',
      title: 'Quotation Mark Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionTwoTextContent',
      title: 'Section Two Text Content',
      type: 'string',
      description: 'The text content of section two',
    }),
    defineField({
      name: 'sectionThreeImage',
      title: 'Section Three Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionThreeTitle',
      title: 'Title of Section Three',
      type: 'string',
      description: 'The title of section three',
    }),
    defineField({
      name: 'sectionThreeTextContent',
      title: 'Section Three Text Content',
      type: 'string',
      description: 'The text content of section three',
    }),
    defineField({
      name: 'sectionFiveImage',
      title: 'Section Five Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionFiveTitle',
      title: 'Title of Section Five',
      type: 'string',
      description: 'The title of section five',
    }),
    defineField({
      name: 'sectionFiveTextContent',
      title: 'Section Five Text Content',
      type: 'string',
      description: 'The text content of section five',
    }),
    defineField({
      name: 'sectionSixImage',
      title: 'Section Six Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionSixTitle',
      title: 'Title of Section Six',
      type: 'string',
      description: 'The title of section five',
    }),
    defineField({
      name: 'sectionSixTextContent',
      title: 'Section Six Text Content',
      type: 'string',
      description: 'The text content of section Six',
    }),
    defineField({
      name: 'sectionSevenBgImage',
      title: 'Section Seven Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.',
        },
      ],
    }),
    defineField({
      name: 'sectionSevenTitle',
      title: 'Section Seven Title',
      type: 'string',
      description: 'Title of section seven',
    }),
    defineField({
      name: 'sectionSevenTextContent',
      title: 'Section Seven Text Content',
      type: 'string',
      description: 'Text content of section seven',
    }),
    defineField({
      name: 'sectionSevenCta',
      title: 'Section Seven Call To Action',
      type: 'string',
      description: 'Call to action statement of section seven',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Call to action url',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      description: 'url for CTA statement'
    }),

  ],

});