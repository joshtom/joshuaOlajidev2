import React from "react"
import Navigation from "../components/Nav"
import Banner from "../components/Banner"
import SEO from "../components/SEO/seo"
import More from "../components/More"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <SEO title="Joshua Olajide | Frontend Developer"/>
      <Navigation />
      <Banner />
      <More />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
