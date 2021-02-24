import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Image } from "./profileImg"
import "./style.scss"

export default function About() {
  const aboutContainer = useRef(null)
  const image = useRef(null)
  const about = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function scrollOnMobile() {
        const tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: "top top",
            scrub: true,
          },
        })

        // tl.to([image.current, about.current], 0.1, {
        //   rotation: 45,
        //   autoAlpha: 0,
        //   translateX: 200,
        // })
        tl.to(image.current, 0.1, {
          translateX: 200,
        }).to(about.current, 0.1, {
          translateX: -200,
        })
      },
    })
  }, [])
  return (
    <div className="About" ref={aboutContainer} id="about">
      <div ref={about}>
        <h1>In the last few years,</h1>
        <p>
          I've built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </p>
        <p>
          I am passionate about Web Performance, Javascript Applications, Great
          user experiences, and Open Source. I am also open for onsite, remote
          or contract work.
        </p>
      </div>
      <div>
        <div className="about__image" ref={image}>
          <Image />
        </div>
      </div>
    </div>
  )
}
