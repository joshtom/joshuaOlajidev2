import React from "react";
import Abstract from "../../assets/abstract.svg";
import "./style.scss";

export default function More() {
    return(
        <div className="more">
            <Abstract className="abstract-image"/>
        <div>
            <h1>iDesign.</h1>
            <p>
                I may not be the perfect guy for your next design project, but I can take any design to the next level with my stylesheet superpowers (o\o)
            </p>
        </div>
        <div>
            <h1>iDevelop..</h1>
            <p>
                I use the latest Frontend-end technologies to build efficient, scalable, and super fast solutions ranging from small to large organizations.
            </p>
        </div>
        <div>
            <h1>iLearn...</h1>
            <p>
                I strongly believe that learning is a part of the journey. The more I learn new stuffs, the more I am able to make connections of the things around me.
            </p>
        </div>
    </div>
    )
}
