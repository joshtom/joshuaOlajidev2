import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

export default function Contact() {
    
    return(
        <div className="contact">
            <section>
            <h1> Let's talk. </h1>            
            <p> Ready to turn your Imaginations into reality? Shoot! </p>
            {/* <div className="phone">
                <p> +234 813 602 3230 </p>
            </div>
            <div className="email">
                <p> joshuaolarjide@gmail.com </p>
            </div> */}
            </section>
        <div className="container">
           <form>
               <div className="form-control">
                    <label htmlFor="name">NAME</label>
                    <input type="text" 
                    placeholder="john Doe"
                    required
                    id="name"
                    />
               </div>

               <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" 
                    placeholder="example@yourdomain.com"
                    required
                    id="email"
                    />
               </div>

               <div className="form-control">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea placeholder="Hi there..." id="message">

                    </textarea>    
               </div>
               <button>
                   SEND
               </button> 
               
           </form>
        </div>
        </div>
    )
}