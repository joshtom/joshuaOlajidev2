import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./style.scss";

export default function About(props) {
        const aboutContainer = useRef(null);
        const image = useRef(null);
     useEffect(() => {
        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
            }

            const tl = gsap.timeline({
                paused: true,
                scrollTrigger: {
                  trigger: aboutContainer.current,
                  scrub: true,
                }
              });

              tl.fromTo(image.current, .4, { x: 100 }, { x: 0})
    }, [])
    return(
        <div className="About" ref={aboutContainer} id="about">
            <div>
                <h1>Over the past few years,</h1>  
                <p>
                I've built products that solve real-life problems ranging from Businesses to companies with focus on creating fast, and accessible user experiences using advanced web technologies. Not only these makes me standout, but paying attention to every detail from any DESIGN which makes me deliver clean, elegant and pixel-perfect solutions.
                </p> 
                <p>
                I am passionate about Web Performance, Javascript Applications, Great user experiences, and Open Source. I am also open for onsite, remote or contract work.
                </p>
            </div>
            <div>
                <div className="about__image" ref={image}>
                    
                </div>
            </div>
        </div>
    )
}