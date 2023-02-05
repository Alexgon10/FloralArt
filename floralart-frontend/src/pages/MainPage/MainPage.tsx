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
import group_mk from "../../assets/img/create/group-mk.svg"
import individual from "../../assets/img/create/individual.svg"
import kids from "../../assets/img/create/kinds.svg"



export function MainPage() {

    return (
        <>
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

            <div className="present-style present-create">
                <div className="item-present-create label-present-create">
                    Дарите
                </div>
                <div className="item-present-create description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                <div className="pictures">
                    <MiniImage image={decor} label="Декор"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={hairstyle} label="Украшения"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={accessory} label="Аксессуары"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                </div>
            </div>

            <div className="create-style present-create">
                <div className="item-present-create label-present-create">
                    Создавайте
                </div>
                <div className="item-present-create description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                <div className="pictures">
                    <MiniImage image={group_mk} label="Групповые мастер классы"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={individual} label="Индивидуальные занятия"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                    <MiniImage image={kids} label="Детские мастер классы"
                               description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."/>
                </div>

            </div>

            <div className="custom-order">
                <div className=" item-present-create label-present-create">
                    Заказывайте
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="label">
                            1. Изучите галерею
                        </div>
                        <div className="text">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </div>
                        <FloralButton isPaintOvered={false} text={"Галерея"}/>
                    </div>

                    <div className="grid-item">
                        <div className="label">
                            3. Свяжитесь для уточнения заказа
                        </div>
                        <div className="text">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        </div>
                        <FloralButton isPaintOvered={false} text={"Написать нам"}/>
                    </div>
                    <div className="grid-item">
                        <div className="label">
                            2. Соберите композицию
                        </div>
                        <div className="text">
                            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam.
                        </div>
                        <FloralButton isPaintOvered={false} text={"Цветы"}/>

                    </div>
                    <div className="grid-item">
                        <div className="label">
                            4. Наблюдайте за процессом работы в личном кабинете
                        </div>
                        <div className="text">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </div>
                        <FloralButton isPaintOvered={false} text={"Личный кабинет"}/>
                    </div>


                </div>

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
                    <div className="quote_text">“Откройте цветок своего сердца и станьте для этого мира подарком красоты
                        ”
                    </div>
                    <hr className="line"/>
                    <div className="author">Брайант МакГилл</div>

                </div>

                <div className="pic_item">
                    <img src={quote_img} alt="first_bg"/>
                </div>
            </div>

            <div className="choseOrContact ">
                <div className="text">Создавайте сами или выбирайте готовую и подходящую вам композицию</div>
                <div className="button_group">
                    <FloralButton isPaintOvered={true} text={"Выберете букет"}/>
                    <FloralButton isPaintOvered={false} text={"Связаться с нами"}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}