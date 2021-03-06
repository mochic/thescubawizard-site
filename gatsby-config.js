const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: ${activeEnv}`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The Scuba Wizard`,
    description: `Minimalist contact website for The Scuba Wizard, dive expert of the Pacific Northwest.`,
    author: `https://github.com/mochic`,
  },
  plugins: [
    "gatsby-plugin-remove-console",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-scuba-wizard`,
        short_name: `scuba`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SW-Logo_NoBackground.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `sriracha`,
          `sue ellen francisco`,
          `major mono display`,
          `karla`,
          `work sans`,
          `monoton`,
          `frijole`,
          `b612 mono`,
          `anton`,
          `roboto\:100,300,400,600,900`,
          `inconsolata\:100,300,400,600,900`,
          `montserrat\:100,300,400,500,600,900`,
          `roboto mono\:100,300,400,600,900`,
          `montserrat alternates\:100,300,400,600,900`,
          `gilda display`,
          `open sans\:100,300,400,500,700,900`,
          `playfair display\:100,300,400,500,700,900`,
        ],
      },
    },
    `gatsby-plugin-remove-console`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
