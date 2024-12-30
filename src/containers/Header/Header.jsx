import React,{useState} from "react";
import style from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import menu from "../../assets/icons/MenuIcon.png";
import BulletPoint from "../../components/BulletPoint/BulletPoint";

const Header = () =>{

    const [showNavigation,setShowNaviagtion] = useState(false)

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setShowNaviagtion(false);
    };

    return(
        <div className={style.header_container}>
            <div onClick={() => scrollToSection('home')} className={style.logo}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={style.menu_container}>
                <div className={style.menu_icon} onClick={()=>{setShowNaviagtion(true)}}>
                    <img src={menu} alt="Menu"/>
                </div>
            </div>
            <div className={`${showNavigation ? style.mobile_menu_bar_show : style.mobile_menu_bar_hide} ${style.mobile_menu_bar}`}>
                    <div className={style.menu_items}>
                        <div onClick={() => scrollToSection('about')} className={`${style.about_text} ${style.menu_texts}`}>
                            ABOUT
                            <span><BulletPoint/></span>
                        </div>
                        <div className={style.about_desc}>WHO WE ARE</div>
                    </div>
                    <div className={style.menu_items}>
                        <div onClick={() => scrollToSection('service')} className={`${style.service_text} ${style.menu_texts}`}>
                            SERVICES
                            <span><BulletPoint/></span>
                        </div>
                        <div className={style.service_desc}>WHAT WE DO</div>
                    </div>
                    <div className={style.menu_items}>
                        <div onClick={() => scrollToSection('contact')} className={`${style.contact_text} ${style.menu_texts}`}>
                            CONTACT
                            <span><BulletPoint/></span>
                        </div>
                        <div className={style.contact_desc}>GET IN TOUCH</div>
                    </div>
            </div>
            <div className={showNavigation ? style.close_show : style.close_hide} onClick={()=>{setShowNaviagtion(false)}}>
                X
            </div>
        </div>
    )
}

export default Header;