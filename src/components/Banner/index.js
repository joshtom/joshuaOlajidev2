import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import styles from "./styles.module.css";
import background from "../../images/pattern.jpg"

const bg = { 
    background: `url(${background}) center center no-repeat`
 }
export default function Banner() {
    const greet = useRef(null);
    const name = useRef(null);
    const title = useRef(null);
    const left = useRef(null);
    const right = useRef(null);
    const experience = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(greet.current, .2, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(name.current, .2, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(title.current, .2, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(left.current, .2, { x: -100, opacity: 0 }, { x: 0, opacity: 1});
        tl.fromTo(right.current, .2, { x: 100, opacity: 0 }, { x: 0, opacity: 1});
        tl.fromTo(experience.current, .5, { opacity: 0 }, { opacity: 1});
        tl.play();
    },[])

    return(
        <div className={styles.banner}>
            
            <div className={styles.scroll}>
               <div className={styles.scroller}>
                   <div></div>
                </div> 
            </div>

            <div className={styles.bannerText}>

                <div>
                    <p ref={greet}>Hello, I am</p>

                <h1 className={styles.avatarName} ref={name}>
                    Joshua Olajide -
                </h1>

                <h1 className={styles.jobTitle} ref={title}>
                    Frontend Developer.
                </h1>

                <section className={styles.bannerTextSection}>
                    <p ref={left}>
                        I love to create Scalable, Fast and mobile-first web Applications.
                    </p>
                    <p ref={right}>
                        Put on a smile and Get ready to turn your Imaginations into reality
                    </p>
                </section>
                </div>

                <section className={styles.bannerScroll}>
               <section className={styles.bannerScroller}>
                   <section></section>
                </section> 
            </section>
            </div>
            <div className={styles.experience} style={bg} ref={experience}>
               
            </div>
            
        </div>

    )
}