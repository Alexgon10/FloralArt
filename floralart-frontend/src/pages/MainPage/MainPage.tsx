import React from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {BaseImageLayer} from "./BaseImageLayer/BaseImageLayer";
import {MiniImage} from "../../components/MiniImage/MiniImage";

import "./mainPage.css"

import what_is_floristic_img from "../../assets/img/what_is_floristic_img.svg"
import redRose from "../../assets/img/red_rose.svg"
import roseBg from "../../assets/img/BgLayer.svg";
import decor from "../../assets/img/miniImage/decor.svg";
import hairstyle from "../../assets/img/miniImage/hairstyle.svg";
import accessory from "../../assets/img/miniImage/accessory.svg";
import quote_img from "../../assets/img/quote_img.svg";
import {FloralButton} from "../../components/FloralButton/FloralButton";




export function MainPage() {

    return (
        <div className="main">
            <Header login='alexgon10@mail.ru'/>
            <BaseImageLayer/>
            <div className="what-is-floral">
                <div className="grid-item text ">
                    <div className="label">
                        Что такое керамическая флористика?
                    </div>
                    <br/>
                    <div>
                        Керамическая флористика - это искусство создания цветов и флористических композиций с помощью
                        специальной техники ручной работы и специальной полимерной глины или холодного фарфора.
                    </div>
                    <br/>
                    <div>
                        При помощи данных материалов удается создавать вечно живые и невероятно реалистичные композиции.
                    </div>
                </div>
                <div className="grid-item pic">
                    <img src={what_is_floristic_img} alt="first_bg"/>
                </div>
            </div>

            <div className="present-create present-style">
                <div className="item label" >
                    Дарите
                </div>
                <div className="item description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                <div className="pictures">
                    <MiniImage image={decor} label= "Декор" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={hairstyle} label= "Украшения" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={accessory} label= "Аксессуары" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia." />
                </div>
            </div>


            <div className="present-create create-style">
                <div className="item label" >
                    Создавайте
                </div>
                <div className="item description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                <div className="pictures">
                    <MiniImage image={decor} label= "Декор" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={hairstyle} label= "Украшения" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={accessory} label= "Аксессуары" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia." />
                </div>

            </div>

            <div className="custom-order">
                sdkjfakjsdhfadsk;f

            </div>
            <div className="what-is-floral">
                <div className="grid-item pic">
                    <img src={redRose} alt="first_bg"/>
                </div>
                <div className="text grid-item">
                    <div className="label">
                        Что такое керамическая флористика?
                    </div>
                    <br/>
                    <div>
                        Керамическая флористика - это искусство создания цветов и флористических композиций с помощью
                        специальной техники ручной работы и специальной полимерной глины или холодного фарфора.
                    </div>
                    <br/>
                    <div>
                        При помощи данных материалов удается создавать вечно живые и невероятно реалистичные композиции.
                    </div>
                </div>
            </div>


            <div className="rose-bg">
                <img src={roseBg} alt="first_bg"/>
            </div>

            <div className="quote">
                <div className="text_item">
                    <div className="quote_text">“Откройте цветок своего сердца и станьте для этого мира подарком красоты ”</div>
                    <hr className="line"/>
                    <div className="author">Брайант МакГилл</div>

                </div>

                <div className="pic_item">
                    <img src={quote_img} alt="first_bg"/>
                </div>
            </div>

            <div className="choseOrContact ">
                <div className="text">Создавайте сами или выбирайте готовую и подходящую вам композицию </div>
                <div className="button_group">
                    <FloralButton isPaintOvered={true} text={"Выберете букет"}/>
                    <FloralButton isPaintOvered={false} text={"Связаться с нами"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}