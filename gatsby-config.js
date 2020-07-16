const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Joshua Olajide | Portfolio`,
    description: `Find my works and connect with me!`,
    author: `Joshua Olajide`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // path: path.join(__dirname, `src`, `images`), 
        path: `${__dirname}/src/images`, // To change if it breaks anything
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
          light: require(`${__dirname}/src/theme.js`).lightTheme,
          dark: require(`${__dirname}/src/theme.js`).darkTheme,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    
  ],
}
