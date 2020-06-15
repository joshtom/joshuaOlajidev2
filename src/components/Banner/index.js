import React from "react";
import styles from "./styles.module.css";
import DownArrow from "../../assets/downArrow.svg";


export default function Banner () {
    return(
        <div className={styles.banner}>
            <section>
            <div className={styles.scroll}>
               <div className={styles.scroller}>
                   <DownArrow className={styles.downArrow}/>
                </div> 
            </div>
            </section>

            <section>

            </section>

            <h1>
                <div>JOS</div>
                <div>HUA <span className={styles.dot}></span></div>
            </h1>
            
        </div>
    )
}