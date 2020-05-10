module.exports = {
  siteMetadata: {
    title: `Sunrise Movement Seattle`,
    description: `A website for the Seattle Hub of the Sunrise Movement.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sunrise Seattle Website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/yellow-logo.png`,
      },
    },
    `gatsby-plugin-aphrodite`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-client-side-redirect`, // keep it in last in list

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
