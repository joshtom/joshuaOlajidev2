import React from "react"
import Navigation from "../components/Nav"
import Banner from "../components/Banner"
import SEO from "../components/SEO/seo"

export default function Home() {
  return (
    <>
      <SEO title="Joshua Olajide | Frontend Developer"/>
      <Navigation />
      <Banner />
    </>
  )
}
