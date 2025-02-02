import { defineField, defineType } from "sanity";


export default defineType({
  name: "service",
  title: "Shared | Services",
  type: "document",
  fields: [
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to show/hide this service on the website.",
      initialValue: true,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("A title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Unique identifier for the service, used in creating the URL. Slugs should be URL-friendly strings. It is auto-generated from the title but can be manually edited for clarity or SEO optimization.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("A slug is required"),
    }),
    defineField({
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      validation: (Rule) => Rule.required().error("An image is required"),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.",
        },
      ],
    }),
    defineField({
      name: "content_image",
      title: "Content Image",
      type: "image",
      validation: (Rule) => Rule.required().error("An image is required"),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Describes the appearance and function of the image. Important for SEO and accessibility. Should be concise and informative.",
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      isActive: "isActive",
      media: "hero_image",
    },
    prepare(selection) {
      const { title, isActive, media } = selection;
      return {
        title: title,
        subtitle: `Status: ${isActive ? "Active" : "Inactive"}`,
        media: media,
      };
    },
  },
});