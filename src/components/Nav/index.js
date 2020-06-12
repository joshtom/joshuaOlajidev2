import React from "react";
import styles from "./styles.module.css";
import { TimelineLite } from "gsap";
import Sunlight from "../../assets/sunlight.svg";
import Close from "../../assets/close.svg";


export default function Navigation() {
    const tl = new TimelineLite({paused: true});
    const navToggle = React.useRef(null);
    const aboutLink = React.useRef(null);
    const writingLink = React.useRef(null);
    const projectLink = React.useRef(null);
    const contactLink = React.useRef(null);
    const socialLink = React.useRef(null);

    const handleNavClick = () => {
        tl.to(navToggle.current, .4, 
            {   x: 0, 
                opacity: 1,
                ease: "slow(0.7, 0.7, false)" 
            })
            .fromTo(aboutLink.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(writingLink.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(projectLink.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(contactLink.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(socialLink.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .play();
    }
    return (
        <header className={styles.header}>
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
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

            <div className={styles.navToggle} ref={navToggle}>
                <ul className={styles.link}>
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

                <div className={styles.close}>
                        <div>
                            <Close />
                        </div>
                </div>

            </div>
        </header>



    )
}