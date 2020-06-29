import React from "react";
import styles from "./styles.module.css";


export default function Banner () {
    return(
        <div className={styles.banner}>
            
            <div className={styles.scroll}>
               <div className={styles.scroller}>
                   <div></div>
                </div> 
            </div>

            <div className={styles.bannerText}>

                <div>
                    <p>Hello, I am</p>

                <h1 className={styles.avatarName}>
                    Joshua Olajide -
                </h1>

                <h1 className={styles.jobTitle}>
                    Frontend Developer.
                </h1>

                <section className={styles.bannerTextSection}>
                    <p>
                        I love to create Scalable, Fast and mobile-first web Applications.
                    </p>
                    <p>
                        Work with me and Get ready to turn your Imaginations into reality
                    </p>
                </section>
                </div>
            </div>
            <div className={styles.experience}>
                <h1> Experience </h1>
            </div>
            
        </div>

    )
}