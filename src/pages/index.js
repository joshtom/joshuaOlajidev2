import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import More from "../components/more"
import About from "../components/about"
import Project from "../components/project"
import SEO from "../components/seo"




const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Joshua Olajide - Portfolio" />
    <Banner />
    <More />
    <About />
    <Project />
  </Layout>
  )
}

export default IndexPage
