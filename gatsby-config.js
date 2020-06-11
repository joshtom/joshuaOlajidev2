
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Joshua Olajide | Portfolio`,
    description: `Find my works and connect with me!`,
    author: `Joshua Olajide`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    
  ],
}
