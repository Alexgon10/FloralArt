import React from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {BaseImageLayer} from "./BaseImageLayer/BaseImageLayer";
import flower from "../../assets/img/pink-rose-with-paints.svg"
import redRose from "../../assets/img/red_rose.svg"
import roseBg from "../../assets/img/BgLayer.svg";
import "./mainPage.css"


export function MainPage() {

    return (
        <div className="main">
            <Header login='alexgon10@mail.ru'/>
            <BaseImageLayer/>
            <div className="what-is-floral">
                <div className="text grid-item">
                    <div className="label">
                        Что такое керамическая флористика?
                    </div>
                    <br/>
                    <div >
                        Керамическая флористика - это искусство создания цветов и флористических композиций с помощью специальной техники ручной работы и специальной полимерной глины или холодного фарфора.
                    </div>
                    <br/>
                    <div >
                        При помощи данных материалов удается создавать вечно живые и невероятно реалистичные композиции.
                    </div>
                </div>
                <div className="grid-item">
                    <img src={flower} alt="first_bg" className="pic" />
                </div>
            </div>

            <div className="present">
                    sdkjfakjsdhfadsk;f

            </div>
            <div className="create">
                sdkjfakjsdhfadsk;f

            </div>
            <div className="custom-order">
                sdkjfakjsdhfadsk;f

            </div>
            <div className="what-is-floral">
                <div className="grid-item">
                    <img src={redRose} alt="first_bg" className="pic" />
                </div>
                <div className="text grid-item">
                    <div className="label">
                        Что такое керамическая флористика?
                    </div>
                    <br/>
                    <div >
                        Керамическая флористика - это искусство создания цветов и флористических композиций с помощью специальной техники ручной работы и специальной полимерной глины или холодного фарфора.
                    </div>
                    <br/>
                    <div >
                        При помощи данных материалов удается создавать вечно живые и невероятно реалистичные композиции.
                    </div>
                </div>
            </div>



            <div className="rose-bg">
                <img src={roseBg} alt="first_bg" />
            </div>
            <div className="quote">


            </div>

            <div className="choseOrContact ">

            </div>
            <Footer/>
        </div>
    )
}