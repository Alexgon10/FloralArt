import React, {useState} from "react";
import {Logo} from "../Logo/Logo";
import {Link} from 'react-router-dom'
import {HeaderLink} from "./HeaderLink"
import './header.css';
import {FloralButton} from "../Buttons/FloralButton";

interface HeaderProps {
    // isLogin: boolean,
    login: String
}

export function Header({login}: HeaderProps) {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <div className="floral-header">
                <div className="label">
                    <Logo/>
                </div>
                <div className="links">
                    <HeaderLink text="Обучение" path="/portfolioPage"/>
                    <HeaderLink text="Магазин" path="/portfolioPage"/>
                    <HeaderLink text="Портфолио" path="/portfolioPage"/>
                    <HeaderLink text="Контакты" path="/portfolioPage"/>
                </div>
                {
                    isLogin
                        ? <div className="buttons">

                            <FloralButton text={"Вход"} isPaintOvered={true}
                                          onClick={() => setIsLogin(isLogin => !isLogin)}/>
                            <FloralButton text={"Регистрация"} isPaintOvered={false}
                                          onClick={() => setIsLogin(isLogin => !isLogin)}/>

                            {/*<button*/}
                            {/*    onClick={() => setIsLogin(isLogin => !isLogin)}*/}
                            {/*    className="w-32 h-9 text-sm text-lightPink border rounded-md border-x-1 border-lightPink outline-0"*/}
                            {/*>*/}
                            {/*    Вход*/}
                            {/*</button>*/}
                            {/*<button*/}
                            {/*    className="w-32 h-9 text-sm text-white bg-lightPink border rounded-md border-x-1 border-lightPink outline-0"*/}
                            {/*>*/}
                            {/*    Регистрация*/}
                            {/*</button>*/}
                        </div>
                        : <div className="buttons ">
                            <FloralButton
                                text={login}
                                isPaintOvered={false}
                                onClick={() => setIsLogin(isLogin => !isLogin)}
                            />
                        </div>
                }
            </div>
        </>
    )
}


