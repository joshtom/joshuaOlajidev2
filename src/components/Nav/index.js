import React from "react";
import styles from "./styles.module.css";
import Sunlight from "../../assets/sunlight.svg"

export default function Navigation() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                JO
                </div>
                <div className={styles.themeToggler}>
                    <Sunlight />
                </div>
                <div className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>



    )
}