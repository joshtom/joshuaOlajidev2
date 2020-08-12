import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import More from "../components/more"
import About from "../components/about"
import Project from "../components/project"
// import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <More />
    <About />
    <Project />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
