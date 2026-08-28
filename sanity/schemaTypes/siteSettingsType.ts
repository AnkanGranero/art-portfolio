import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      description: 'Shown in the header and browser tab.',
    }),
    defineField({
      name: 'headingFont',
      title: 'Heading font',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Ojuju (medium)', value: 'ojuju' },
          { title: 'Faculty Glyphic (regular)', value: 'facultyGlyphic' },
        ],
      },
      initialValue: 'ojuju',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyFont',
      title: 'Body font',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Shippori Mincho B1 (regular)', value: 'shipporiMinchoB1' },
          { title: 'Poppins (light)', value: 'poppins' },
          { title: 'Ojuju (light)', value: 'ojuju' },
          { title: 'Inter (light)', value: 'inter' },
        ],
      },
      initialValue: 'inter',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryHeadingSize',
      title: 'Category page heading size',
      description: 'Size of the title (h1) on a category page, for mobile and desktop.',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryBodySize',
      title: 'Category page body text size',
      description: 'Size of the body text on a category page, for mobile and desktop.',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
