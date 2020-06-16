import React from "react";
import styles from "./styles.module.css";
import { TimelineLite, TweenLite } from "gsap";
import Sunlight from "../../assets/sunlight.svg";
import Close from "../../assets/close.svg";


export default function Navigation() {
    const [ isToggled, setToggled ] = React.useState(false)
    const tl = new TimelineLite({paused: true, repeat: false});
    const animateHamburger = TweenLite;
    const stick1 = React.useRef(null);
    const stick2 = React.useRef(null);
    const stick3 = React.useRef(null);
    const navToggle = React.useRef(null);
    const navToggleLinks = React.useRef(null);
    const header = React.useRef(null);
    const aboutLink = React.useRef(null);
    const writingLink = React.useRef(null);
    const projectLink = React.useRef(null);
    const contactLink = React.useRef(null);
    const socialLink = React.useRef(null);
    const closeDiv = React.useRef(null);


    const handleNavClick = () => {
          setToggled(!isToggled)

          if(isToggled === false) {
            // TweenLite.to(stick3.current, .2, {opacity: 0} );
            // TweenLite.to(stick1.current, .2, {
            //     y: 6,
            //     rotate: 50
            // });
            // TweenLite.to(stick2.current, .2, {
            //     rotate: -50,
            // });

            tl.to(navToggle.current, .4, 
                {
                    x: 0,
                    opacity: 1,
                    ease: "back.out(1.7)"
                })
                .fromTo(aboutLink.current,   .3,  { y: 10, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(writingLink.current, .3,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(projectLink.current, .3,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(contactLink.current, .3,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(socialLink.current,  .4,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(closeDiv.current,  .4,{ x: 100, opacity: 0 }, { x: 0, opacity: 1 })
                .play();
          } else if(isToggled === true) {
            tl.to(navToggle.current, .4, { x: 1000, opacity: 0 });
          }
    }



    const handleCloseClick = (e) => {
        if (navToggleLinks.current.contains(e.target)) {
            return;
          }
        tl.to(navToggle.current, .4, { x: 1000, opacity: 0 });
    }

    React.useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleCloseClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleCloseClick);
        };
      }, []);

    return (
        <header className={styles.header} ref={header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                JO
                </div>
                <div className={styles.themeToggler}>
                    <Sunlight />
                </div>
                <div 
                className={styles.hamburger}
                onClick={handleNavClick}
                role="button"
                tabIndex="1"
                >
                    <div ref={stick1}></div>
                    <div ref={stick2}></div>
                    <div ref={stick3}></div>
                </div>
            </nav>
                <div 
                className={styles.navToggle} 
                ref={navToggle}
                >
                            <ul className={styles.link} ref={navToggleLinks}>
                            <li ref={aboutLink}>
                                <a href="#" id="about">About</a>
                            </li>
        
                            <li ref={writingLink}>
                                <a href="#" id="pen">Writings</a>
                            </li>
        
                            <li ref={projectLink}>
                                <a href="#" id="project">Project</a>
                            </li>
        
                            <li ref={contactLink}>
                                <a href="#" id="contact">Contact</a>
                            </li>
        
                            <li ref={socialLink}>
                                <div className={styles.social}>
                                    <a href="#" className={styles.gh}>GH</a>
                                    <a href="#" className={styles.tw}>TW</a>
                                    <a href="#" className={styles.ln}>LN</a>
                                    <a href="#" className={styles.md}>MD</a>
                                </div>
                            </li>
                        </ul>
    
                </div> 
        </header>



    )
}