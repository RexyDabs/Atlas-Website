import { defineType, defineField } from 'sanity'

export const impact = defineType({
  name: 'impact',
  title: 'Impact Highlight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short, punchy title of the impact initiative',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'One to two sentence summary of this impact story',
      rows: 2
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      description: 'Full explanation or breakdown of what happened, who benefited, and how'
    }),
    defineField({
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When the impact occurred or was recorded'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Community', value: 'community' },
          { title: 'Environmental', value: 'environment' },
          { title: 'Industry', value: 'industry' },
          { title: 'Training & Mentorship', value: 'training' }
        ]
      }
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
})
