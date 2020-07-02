import React, { useEffect, useState } from "react"
import Navigation from "../components/Nav"
import Banner from "../components/Banner"
import SEO from "../components/SEO/seo"
import More from "../components/More"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const [ navState, setNavState ] = useState('black');
  const [ themeState, setThemeState ] = useState('black');
  const [ logoState, setLogoState ] = useState('black');
  const [ transState, setTransState ] = useState(0);

  useEffect(() => {
    let windowSubscribed = true;
    window.addEventListener("scroll", listenToScroll);
    return () => {
      windowSubscribed = false;
    }
  }, [])

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    
    if (scrolled <= 0.37) { setNavState('#000'); setThemeState('#000'); }
    if (scrolled >= 0.37) { setNavState('#F8F8F9'); setThemeState('#F8F8F9'); setLogoState('#307378'); setTransState('20px')}
    if (scrolled >= 0.60) { setNavState('#36363e'); setThemeState('#36363e'); }
    if (scrolled >= 0.95) { setNavState('#edddd4'); setThemeState('#edddd4'); }

    
  }
  return (
    <>
      <SEO title="Joshua Olajide | Frontend Developer"/>
      <Navigation 
      stick={{backgroundColor: `${navState}`}} 
      theme={{ fill: `${themeState}` }}
      logo={{ backgroundColor: `${logoState}`, }}
      />
      <Banner />
      <More />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
