import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Url } from './url'
import { Github } from './github'
import "./style.scss";

const Project = ({ data }) =>{
    // const card = useRef();
    // const scrollContainer = useRef();
    // let pageYOffset = window.pageYOffset;
    // const render = () => {
    //     const newPageOffset = window.pageYOffset
    //     const diff = newPageOffset - pageYOffset
        
    //     const tl = gsap.timeline({
    //         paused: true
    //     })
    //     tl.to(scrollContainer.current, .3, {
    //         // skewX: -diff * 0.03,
    //         skewY: diff * 0.1,
    //         ease: "Power4.ease"
    //     }).play()
        
    //     pageYOffset = newPageOffset
    //   requestAnimationFrame(render)
    // }
    

    // useEffect(() => {
    //     render();
    // }, [])

    /* useEffect(() => {
        // Skew cards on scroll
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(card.current, "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); 

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
            }

            ScrollTrigger.create({
                onUpdate: (self) => {
                  let skew = clamp(self.getVelocity() / -300);
                  // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                  if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                  }
                }
              });
              
              // make the right edge "stick" to the scroll bar. force3D: true improves performance
              gsap.set(card.current, {transformOrigin: "right center", force3D: true});
              

    }, []) */

   

    return(
        <div className="projects" id="project">
            
            <h1 className="project-title"> Projects. </h1>            
            <p className="project-subtitle"> I <b>design</b> and <b>Build</b> web Applications. </p>
        <div className="container">
           <div className="card" >
                <h1> Joshua <br /> Olajide.</h1>
                <p> portfolio </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" >
                <h1> Feeling <br /> Pressed.</h1>
                <p> blog </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" >
                <h1> Serv- <br /> iceMart.</h1>
                <p> investment </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" >
                 <h1> Dev <br /> Alert.</h1>
                <p> jobs </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" >
                  <h1> Covid <br /> Report.</h1>
                <p> healthcare </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" >
                 <h1> Conn- <br /> ect Four.</h1>
                <p> fun game </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
        </div>        
        </div>
    )
}

export default Project
