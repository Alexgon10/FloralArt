import React, {useState} from "react";
import './messanger-button.css';

type MessangerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    targetPath: string,
    imgPath: string;
}

export const MessangerButton = React.forwardRef<HTMLButtonElement, MessangerButtonProps>(
    ({targetPath, imgPath, ...props}, ref) => (
        <button className="messanger-button"
                {...props}
                ref={ref}
                onClick={() => redirectToMsg(targetPath)}
        >
            <img src={imgPath} alt="tg"/>
        </button>
    ));

function redirectToMsg(path: string) {
    // переадресовать на мессенджер
    console.log("go to path " + path);
}


