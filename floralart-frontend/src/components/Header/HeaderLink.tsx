import React from "react";
import {Link} from 'react-router-dom'
import "./link.css"

interface LinkProps {
    text: String;
    path: String;
}

export function HeaderLink({text, path}: LinkProps) {
    return (
        <>
            <Link className="link" to={path.toString()}>{text}</Link>
        </>
    )
}


