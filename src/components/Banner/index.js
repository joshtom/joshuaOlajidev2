import React from "react";
import styles from "./styles.module.css";
import background from "../../images/pattern.jpg"

const bg = { 
    background: `url(${background}) center center no-repeat`
 }
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

                <section className={styles.bannerScroll}>
               <section className={styles.bannerScroller}>
                   <section></section>
                </section> 
            </section>
            </div>
            <div className={styles.experience} style={bg}>
                {/* <h1> Experience. </h1>
                <div className={styles.block__1}>
                    <details open={isOpen} onClick={onToggle}>
                        <summary> DEV CAREER </summary>
                        <p>
                        I served as an intern at devcareer working seamlessly along with team members across africa to build products that solve real-life problems.
                        </p>
                        
                    </details>
                </div> */}
               
            </div>
            
        </div>

    )
}