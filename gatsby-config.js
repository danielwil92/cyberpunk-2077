/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins:  [
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ],
  siteMetadata: {
    title: "Cyberpunk 2077 — from the creators of The Witcher 3: Wild Hunt",
    description:
        "Enter the world of Cyberpunk 2077 — a storydriven, open world RPG of the dark future from CD PROJEKT RED, creators of The Witcher series of games.",
  },
}
