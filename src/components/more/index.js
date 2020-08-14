import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./style.scss";

export default function More() {
        const moreContainer = useRef(null)
        const iDesign = useRef(null);
        const iDevelop = useRef(null);
        const iLearn = useRef(null);
    useEffect(() => {
        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
            }

            const tl = gsap.timeline({
                paused: true,
                scrollTrigger: {
                  trigger: moreContainer.current,
                  scrub: true,
                }
              });

              tl.fromTo(iDesign.current, .1, { opacity: 0, y: 100 }, { opacity: 1, y: 0})
              .fromTo(iDevelop.current, .1, { opacity: 0, y: 100 }, { opacity: 1, y: 0})
              .fromTo(iLearn.current, .1, { opacity: 0, y: 100 }, { opacity: 1, y: 0})
    }, [])

    return(
        <div className="more" id="more" ref={moreContainer}>
        <div ref={iDesign}>
            <h1>iDesign. </h1>
            <p>
                I may not be the guy behind Figma or AdobeXD, but I can take any design to the next level with my stylesheet superpowers (o _ >)
            </p>
        </div>
        <div ref={iDevelop}>
            <h1>iDevelop..</h1>
            <p>
                I use the latest Frontend-end technologies 👩🏼‍💻 to build efficient, scalable, and super fast solutions ranging from small to large organizations.
            </p>
        </div>
        <div ref={iLearn}>
            <h1>iLearn...</h1>
            <p>
                I strongly believe that learning 📑is a part of the journey. The more I learn new stuffs, the more I am able to make connections of the things around me.
            </p>
        </div>
    </div>
    )
}
