import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company or Project (Optional)',
      type: 'string'
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'fullText',
      title: 'Full Testimonial Text',
      type: 'text',
      rows: 5,
      description: 'Optional full testimonial if different from featured quote'
    }),
    defineField({
      name: 'avatar',
      title: 'Client Image or Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      description: 'Out of 5 stars',
      validation: Rule => Rule.min(1).max(5)
    }),
    defineField({
      name: 'project',
      title: 'Linked Project',
      type: 'reference',
      to: [{ type: 'clientSolution' }, { type: 'portfolioImage' }],
      description: 'Optional: Associate testimonial with a client solution or project'
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
      title: 'clientName',
      subtitle: 'company',
      media: 'avatar'
    }
  }
})
