import React from "react";
import styles from "./styles.module.css";
import DownArrow from "../../assets/downArrow.svg";


export default function Banner () {
    return(
        <div className={styles.banner}>
            
            <div className={styles.scroll}>
               <div className={styles.scroller}>
                   {/* <DownArrow className={styles.downArrow}/> */}
                   <div></div>
                </div> 
            </div>
            


            <div className={styles.bannerText}>
                <h1 className={styles.bannerTextHeading}>
                    HELLO <span className={styles.dot}></span>
                </h1> 

                <h1>
                    I'm Joshua Olajide
                </h1>

                <h4>
                    <center>Frontend Developer and LifeLong Learner </center>
                </h4>

                <section className={styles.bannerTextSection}>
                    <p>
                        I love to create Scalable, Fast and mobile-first web Applications.
                    </p>
                    <p>
                        Come with me and Get ready to turn your Imaginations into reality
                    </p>
                </section>
            </div>
            
        </div>

    )
}