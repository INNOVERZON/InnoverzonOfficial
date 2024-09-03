import React from "react";
import style from "./About.module.css";
import BulletPointLine from "../../components/BulletPointLine/BulletPointLine";
import about from "../../assets/images/About.svg";
import divider from "../../assets/images/divide-line.svg";
import mission_vision from "../../assets/images/mission-vision.svg";

const About = () =>{
    return(
        <div id="about" className={style.about_container}>
            <div className={style.title}>
                <div> <span>W</span>HO &nbsp; <span>W</span>E &nbsp; <span>A</span>RE</div>
            </div>
            <BulletPointLine className={style.bullet}/>
            <div className={style.about_content}>
                <div className={style.about_content_left}>
                    Welcome to INNOVERZON, where innovation meets excellence. 
                    As a dynamic IT startup, we specialize in delivering comprehensive digital solutions that empower businesses to thrive in the modern world.
                    Our team of experts is dedicated to pushing the boundaries of technology, ensuring that our clients stay ahead in an ever-evolving digital landscape.
                </div>
                <div className={style.about_content_right}>
                    <img src={about} alt="About Image"/>
                </div>
            </div>
            <div className={style.mission_vision}>
                <div className={style.mission_vision_image_container}>
                    <div className={style.mission_vision_image}>
                        <img src={mission_vision} alt="Mission and Vision"/>
                    </div>
                </div>
                <div className={style.mission_content_outer}>
                    <div className={style.mission_content}>
                        <div><span>M</span>ISSION</div>
                        At INNOVERZON, our mission is to deliver innovative and cutting-edge digital solutions that empower businesses to succeed in an increasingly connected world. 
                    </div>
                    <div className={style.divider}><img src={divider} alt="Divide Line"/></div>
                    <div className={style.vision_content}>
                        <div><span>V</span>ISION</div>
                        Our vision is to be a global leader in the IT industry, recognized for pushing the boundaries of innovation. We aspire to transform businesses by providing  strategies they need to excel in the digital age.
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;