import React from "react";
import style from "./Home.module.css";
import BulletPoint from "../../components/BulletPoint/BulletPoint";
import BulletPointLine from "../../components/BulletPointLine/BulletPointLine";

const Home = () =>{

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }; 

    return(
        <div id="home" className={style.home_container}>
            <div className={style.home_content}>
                <div className={style.home_description}>
                    <div className={style.main_desc}>Hello folks, We are Innoverzon Studio.</div>
                    <div className={style.home_sub_desc}>
                        <div className={style.home_sub_left}><BulletPointLine/></div>
                        <div className={style.home_sub_right}>We create stunning digital experiences that will help your business stand out.</div>
                    </div>
                </div>
                <div className={style.menu_bar}>
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
            </div>
        </div>
    )
}

export default Home;