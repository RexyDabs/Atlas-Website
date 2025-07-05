// File: sanity/schemas/heroVideo.ts

export default {
  name: "heroVideo",
  title: "Hero Video Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Headline",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subheading",
      type: "string",
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
    {
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
    },
    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    },
    {
      name: "fallbackImage",
      title: "Fallback Poster Image",
      type: "image",
    },
  ],
}
