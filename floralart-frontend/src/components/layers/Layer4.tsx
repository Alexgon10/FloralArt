import React from "react";
import flower from "../../assets/img/red_rose.svg";

export function Layer4(){

    return(
        <div className="grid grid-cols-2 place-items-center h-screen/2 ">
            <div className="w-8/12">
                {/*<img src={flower} alt="first_bg" className="h-full w-full object-cover opacity-90 overflow-visible" />*/}
            </div>
            <div className=" w-9/12 text-left break-all overflow-auto text-xl">
                <span className="text-darkPink text-2xl ">
                    Sed ut perspiciatis unde omnis
                </span>
                <br/>
                <br/>
                <span className="text-lightPink">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                </span>
            </div>
        </div>
    );
}