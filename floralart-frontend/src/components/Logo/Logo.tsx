import React from "react";
import logo from '../../assets/img/logo.svg';
import "./logo.css"

export function Logo() {
    return(
        <img src={logo} alt="Logo" className="logo"/>
    )
}