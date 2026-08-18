import { defineField, defineType } from 'sanity'

export const socialLinkType = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Email', value: 'email' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'X (Twitter)', value: 'twitter' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Pinterest', value: 'pinterest' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'For Email, use a mailto: link, e.g. mailto:you@example.com',
      validation: (Rule) =>
        Rule.required().uri({ scheme: ['http', 'https', 'mailto'] }),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order, lowest first.',
    }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
})
