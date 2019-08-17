export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Yummy Eats ATL'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Yummy Eats ATL was made to show off some of the best authentic/traditional restaurants in the Atlanta area.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'food, atl, atlanta, authentic, traditional, yummy, eats',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Author of this site is Tanya M',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ]
}
