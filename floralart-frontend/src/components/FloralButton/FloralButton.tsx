import React, {useState} from "react";
import './button.css';

type FloralButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isPaintOvered: boolean,
    text: string;
}

export const FloralButton = React.forwardRef<HTMLButtonElement, FloralButtonProps>(
    ({isPaintOvered, text, ...props}, ref) => (
        <button className={isPaintOvered ? "painted" : "notPainted"}
                {...props}
                ref={ref}
                >
            {text}
        </button>
    ));

//
// export function FloralButton({isPaintOvered, text}: FloralButtonProps) {
//     // const [style, setStyle] = useState("paintedStyle")
//
//     return (
//         <button
//             // onClick={() => setIsLogin(isLogin => !isLogin)}
//             className={isPaintOvered ? "painted" : "notPainted"}
//         >
//             {text}
//         </button>
//     )
// }


