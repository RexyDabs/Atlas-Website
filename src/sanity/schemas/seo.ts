// src/sanity/schemas/seo.ts

import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO Settings",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      description: "Appears in search engine results and browser tabs.",
      validation: Rule => Rule.max(60).warning('SEO titles should ideally be under 60 characters.'),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 2,
      description: "Summarize the page for search engines and social media.",
      validation: Rule => Rule.max(160).warning('Meta descriptions should ideally be under 160 characters.'),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Relevant SEO keywords (optional but useful).",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Use this to avoid duplicate content issues (advanced).",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Prevent search engines from indexing this page.",
    }),
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description: "Used for link previews on social platforms.",
      options: {
        hotspot: true,
      },
    }),
  ],
});
