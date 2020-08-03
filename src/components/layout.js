

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyles"
import { theme as styledTheme } from "../styles/theme"

import Header from "./header"
import Footer from "./footer"
import { Container } from "./container"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
