import { defineType, defineField } from 'sanity'

export const portfolioImage = defineType({
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Used for SEO and accessibility',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Off-grid / Solar', value: 'offGrid' },
          { title: 'Automation', value: 'automation' },
          { title: 'Fitout', value: 'fitout' },
          { title: 'Custom', value: 'custom' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage or Service Pages',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'date'
    }),
    defineField({
      name: 'testimonial',
      title: 'Linked Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }]
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

