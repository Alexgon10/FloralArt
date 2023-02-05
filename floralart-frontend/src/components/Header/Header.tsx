import React, {useState} from "react";
import {Logo} from "../Logo/Logo";
import {Link} from 'react-router-dom'
import {FloralLink} from "./FloralLink"
import './header.css';
import {FloralButton} from "../FloralButton/FloralButton";

interface HeaderProps {
    // isLogin: boolean,
    login: string
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
                    <FloralLink text="Обучение" path="/portfolioPage"/>
                    <FloralLink text="Магазин" path="/portfolioPage"/>
                    <FloralLink text="Портфолио" path="/portfolioPage"/>
                    <FloralLink text="Контакты" path="/portfolioPage"/>
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


