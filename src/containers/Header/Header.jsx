import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import menu from "../../assets/icons/MenuIcon.png";

const Header = () =>{

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }; 

    return(
        <div className={style.header_container}>
            <div onClick={() => scrollToSection('home')} className={style.logo}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={style.menu_container}>
                <div className={style.menu_text}>MENU</div>
                <div className={style.menu_icon}>
                    <img src={menu} alt="Menu"/>
                </div>
            </div>
        </div>
    )
}

export default Header;