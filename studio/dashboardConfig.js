export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d57738fef5854abbd55f88a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8oqesqto',
                  apiId: '534bd41c-1098-4140-bd2d-b498880895b0'
                },
                {
                  buildHookId: '5d57738f933cc2c71adc0fe0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5mkqqduo',
                  apiId: '65f7bafb-79cd-4ece-9f9a-b63e601bcf76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmott13/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5mkqqduo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
