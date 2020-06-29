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

                <p>Hello, I'm</p>

                <h1>
                    Joshua Olajide,
                </h1>

                <h4>
                    <center>Frontend Developer && LifeLong Learner. </center>
                </h4>

                <section className={styles.bannerTextSection}>
                    <p>
                        I love to create Scalable, Fast and mobile-first web Applications.
                    </p>
                    <p>
                        Work with me and Get ready to turn your Imaginations into reality
                    </p>
                </section>
            </div>
            <div className={styles.experience}>

            </div>
            
        </div>

    )
}