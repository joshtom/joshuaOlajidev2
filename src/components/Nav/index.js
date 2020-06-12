import React from "react";
import styles from "./styles.module.css";
import { TweenMax } from "gsap";
import Sunlight from "../../assets/sunlight.svg";


export default function Navigation() {
    const navToggle = React.useRef(null);
    const handleNavClick = () => {
        TweenMax.to(navToggle.current, .4, 
            {   x: 0, 
                opacity: 1,
                ease: "slow(0.7, 0.7, false)" 
            });
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
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

            <div className={styles.navToggle} ref={navToggle}>

            </div>
        </header>



    )
}