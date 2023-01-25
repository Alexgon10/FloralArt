import React from "react";
import bg from "../../assets/img/BgLayer.svg";
import "./l5.css"

export function Layer5(){

    return(

        <div className="bg">
            <img src={bg} alt="first_bg" className="h-full w-full object-cover overflow-visible" />
        </div>
    );
}