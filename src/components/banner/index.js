import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from "./styles.module.css";


export default function Banner() {
    const greet = useRef(null);
    const name = useRef(null);
    const title = useRef(null);
    const left = useRef(null);
    const right = useRef(null);
    const experience = useRef(null);

    useEffect(() => {

        
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(greet.current, .1, { y: -10, opacity: 0,}, { y: 0, opacity: 1, ease: "bounce.in"});
        // tl.fromTo(greet.current, {duration: 2,  ease: "bounce.in", scale:0, rotation:0 }, {duration: 2,  ease: "bounce.out", scale:1.5, rotation:30 } );
        tl.fromTo(name.current, .1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(title.current, .1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
        tl.fromTo(left.current, .4, { x: -100, opacity: 0 }, { x: 0, opacity: 1, ease: "back.out(1.7)"});
        tl.fromTo(right.current, .4, { x: 100, opacity: 0 }, { x: 0, opacity: 1, ease: "back.out(1.7)"});
        tl.play();
    },[])

    const scroller = e => {
        e.preventDefault();
        alert('This is working now');
    }



    return(
        <div className={styles.banner} id="banner">
            
            <div className={styles.scroll}>
               <div className={styles.scroller}>
                   <div></div>
                </div> 
            </div>

            <div className={styles.bannerText}>

                <div>
                    <p ref={greet}>Hello, 👋🏼 I am</p>

                <h1 className={styles.avatarName} ref={name}>
                    Joshua Olajide ✔
                </h1>

                <h1 className={styles.jobTitle} ref={title}>
                    Frontend Developer. 
                </h1>

                <section className={styles.bannerTextSection}>
                    <p ref={left} className={styles.bannerTextSection__intro}>
                        I <span className={styles.bannerTextSection__heart}>❤</span> to create Scalable, Fast and mobile-first web Applications.
                    </p>
                    <p ref={right}>
                        Put on a 😊 and Get ready to turn your Imaginations into reality.
                    </p>
                </section>
                </div>

                <section className={styles.bannerScroll}>
               <section className={styles.bannerScroller}>
                   <section> </section>
                </section> 
            </section>
            </div>
            <div className={styles.experience} ref={experience}>
                {/* Design some patterns and add it as image */}
            </div>
            
        </div>

    )
}