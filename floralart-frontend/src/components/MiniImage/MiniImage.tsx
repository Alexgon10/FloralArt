import React from "react";
import "./miniImage.css"
import flower from "../../assets/img/miniImage/decor.svg";


interface MiniImageProps {
    image: string;
    label : string;
    description: string

}

export function MiniImage({image, label,description}: MiniImageProps) {
    return (
        <div className="container">
            <img alt="miniImage" className="image" src={image}/>
            <div className="desc">
                <div className="lbl">{label}</div>
                <div className="text">{description}</div>
            </div>

        </div>
    );


}