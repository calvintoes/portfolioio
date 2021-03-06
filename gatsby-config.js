module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#396597`,
        display: `standalone`,
        icon: 'src/images/Logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingId: 'UA-178474593-2',
        head: true,
      },
    },
  ],
};
