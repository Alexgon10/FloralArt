import React from "react";
import "./footer.css";
import {FloralLink} from "../Header/FloralLink";
import {Logo} from "../Logo/Logo";
import {MessangerButton} from "../MessangerButton/MessangerButton";

import tg from "../../assets/img/msgImage/tg_img.svg";
import inst from "../../assets/img/msgImage/inst_img.svg";

export function Footer() {

    return (
        <div className="floral-footer">
            <div className="grid-container">
                <div className="left-column link-style">
                    <FloralLink text="Обучение" path="/portfolioPage"/>
                    <FloralLink text="Магазин" path="/portfolioPage"/>
                    <FloralLink text="Портфолио" path="/portfolioPage"/>
                    <FloralLink text="Тарифы и услуги" path="/portfolioPage"/>
                </div>
                <div className="center">
                   <Logo/>
                </div>
                <div className="right-column link-style">
                    <p> +7-912-345-67-89 </p>
                    <p> floralart@gmail.com </p>
                    <p> @floralart.tg </p>
                </div>
            </div>
            <hr className="line"/>
            <div className="design-by">
                <div></div>
                <p>© FloralArt, Inc. 2022. We love our users!</p>
                <div className="messangers-buttons">
                    <MessangerButton imgPath={tg}  targetPath={"https://web.telegram.org/"} />
                    <MessangerButton imgPath={inst}  targetPath={"www.inst.com"} />
                </div>
            </div>
        </div>
    );
}