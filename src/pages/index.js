import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import More from "../components/more"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <More />
  </Layout>
)

export default IndexPage
