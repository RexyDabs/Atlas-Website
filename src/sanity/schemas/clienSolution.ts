import { defineType, defineField } from 'sanity'

export const clientSolution = defineType({
  name: 'clientSolution',
  title: 'Client Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. Airbnb Electrical Fitouts, Renovators Support Package',
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
      name: 'intro',
      title: 'Intro Summary',
      type: 'text',
      rows: 3,
      description: '1–2 sentence overview for SEO and page summaries'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
      description: 'Problem-solution breakdown, testimonials, callouts, etc.'
    }),
    defineField({
      name: 'serviceTags',
      title: 'Service Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Link this solution to specific services offered'
    }),
    defineField({
      name: 'checklistItems',
      title: 'Checklist Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key deliverables or client benefits in bullet format'
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      initialValue: false
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
      media: 'heroImage'
    }
  }
})
