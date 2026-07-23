import { defineType, defineField } from 'sanity'
export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string'
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image'
    })
  ]
})