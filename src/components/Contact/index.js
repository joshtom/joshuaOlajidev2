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
                    <label id="name">NAME</label>
                    <input type="text" 
                    placeholder="john Doe"
                    required
                    id="name"
                    />
               </div>

               <div className="form-control">
                    <label id="contact">EMAIL</label>
                    <input type="email" 
                    placeholder="example@yourdomain.com"
                    required
                    id="contact"
                    />
               </div>

               <div className="form-control">
                    <label id="name">MESSAGE</label>
                    <textarea placeholder="Hi there...">

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