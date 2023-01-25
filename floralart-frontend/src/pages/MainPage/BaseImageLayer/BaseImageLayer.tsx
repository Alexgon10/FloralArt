import React from "react";
import bg from "../../../assets/img/first_bg.svg"
import "./baseImage.css"




export function BaseImageLayer(){
    return(
        <div className="base-image-layer">
            <img src={bg} alt="first_bg"  />
            <span className="main-text">
                FLORAL ART
            </span>
            <div
                className="addition-text"
            >
                Студия керамической флористики
            </div>
        </div>
    );
}