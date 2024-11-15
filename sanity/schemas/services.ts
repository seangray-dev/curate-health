import { defineField, defineType, Fieldset } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Unique identifier for the service, used in creating the URL. Slugs should be URL-friendly strings. It is auto-generated from the title but can be manually edited for clarity or SEO optimization.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required'),
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      validation: (Rule) => Rule.required().error('An image is required'),
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
      name: 'hero_image',
      title: 'hero_image',
      type: 'image',
      validation: (Rule) => Rule.required().error('An image is required'),
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
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this service on the website.',
      initialValue: true,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
      ],
    }),
    defineField({
      type: 'object',
      name: 'person',
      fieldsets: [{ name: 'social', title: 'Social media handles' }],
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'string',
          fieldset: 'social',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      media: 'image',
    },
    prepare(selection) {
      const { title, isActive, media } = selection;
      return {
        title: title,
        subtitle: `Status: ${isActive ? 'Active' : 'Inactive'}`,
        media: media,
      };
    },
  },
});
