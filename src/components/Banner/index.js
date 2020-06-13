import React from "react";
import styles from "./styles.module.css";
import Moon from "../../assets/moon.svg";


export default function Banner () {
    return(
        <div className={styles.banner}>
            <section>
            <div className={styles.scroll}>
               <div><Moon /></div> <div>scroll</div>
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