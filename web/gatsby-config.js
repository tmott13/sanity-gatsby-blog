// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ],
  siteMetadata: {
    title: "Yummy Eats ATL",
    description:
      "Yummy Eats ATL was made to show off some of the best authentic/traditional restaurants in the Atlanta area.",
    url: "https://yummyeatsatl.fun", // No trailing slash allowed!
    image: "/images/yummyeats.png" // Path to your image you placed in the 'static' folder
  }
}
