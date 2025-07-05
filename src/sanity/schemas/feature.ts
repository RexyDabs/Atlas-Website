import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Feature Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional icon shown with feature (e.g. tick, lightning bolt)',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlighted?',
      type: 'boolean',
      initialValue: false,
      description: 'Use this to feature in home pages or hero sections',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
