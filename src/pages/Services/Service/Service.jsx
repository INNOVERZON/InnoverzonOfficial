import React from "react";
import style from "./Service.module.css";
import service_image from "../../../assets/images/service-image.svg";
import BulletPointLine from "../../../components/BulletPointLine/BulletPointLine";
import web from "../../../assets/icons/web-icon.svg";
import app from "../../../assets/icons/app-icon.svg";
import ui_ux from "../../../assets/icons/ui-ux-icon.svg";
import design from "../../../assets/icons/design-icon.svg";
import marketing from "../../../assets/icons/digital-mark-icon.svg";
import seo from "../../../assets/icons/seo-icon.svg";
import it_support from "../../../assets/icons/it-support-icon.svg";
import tech_support from "../../../assets/icons/technical-support-icon.svg";
import data_analytics from "../../../assets/icons/data-analytics-icon.svg";
import maintenance from "../../../assets/icons/maintenance.png";


const Service = () => {

    return(
        <div id="service" className={style.service_container}>
            <div className={style.title}>
                <div> <span>W</span>HAT &nbsp; <span>W</span>E &nbsp; <span>D</span>O</div>
            </div>
            <BulletPointLine className={style.bullet}/>
            <div className={style.service_content}>
                <div className={style.service_content_left}>
                    We have everything you need to launch and grow a successful digital business.
                    We offer a comprehensive suite of services designed to meet the diverse needs of modern businesses.
                    Our expertise spans multiple areas of IT, ensuring that we can provide tailored solutions that drive success and innovation.
                </div>
                <div className={style.service_content_right}>
                    <img src={service_image} alt="Service Illustration"/>
                </div>
            </div>
            <div className={style.service_listing}>
                <div className={style.list_row_1}>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={web} alt="Web Developement"/></div>
                        <div>Web Developement</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={app} alt="App Developement"/></div>
                        <div>App Developement</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={ui_ux} alt="UI/UX Designing"/></div>
                        <div>UI/UX Design</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={design} alt="Graphical Designing"/></div>
                        <div>Graphic Design</div>
                    </div>
                </div>
                <div className={style.list_row_2}>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={marketing} alt="Digital Marketing"/></div>
                        <div>Digital Marketing</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={seo} alt="Search Engine Optimization"/></div>
                        <div>SEO</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={data_analytics} alt="Data Analytics"/></div>
                        <div>Data Analytics</div>
                    </div>
                </div>
                <div className={style.list_row_3}>
                    <div className={style.row_items}>
                        <div><img style={{width:"52px",height:"52px"}} className={style.img_hover} src={it_support} alt="IT Support"/></div>
                        <div>IT Support</div>
                    </div>
                    <div className={style.row_items}>
                        <div><img className={style.img_hover} src={tech_support} alt="Technical Support"/></div>
                        <div>Technical Support</div>
                    </div>
                </div>
                <div className={style.list_row_3}>
                    <div className={style.row_items}>
                        <div><img style={{width:"50px",height:"50px"}} className={style.img_hover} src={maintenance} alt="Maintenance"/></div>
                        <div>Maintenance</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;