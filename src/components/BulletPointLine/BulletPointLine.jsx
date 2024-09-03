import React from "react";
import BulletPoint from "../BulletPoint/BulletPoint";
import style from './BulletPointLine.module.css';

const BulletPointLine = () => {
    return(
        <div className={style.BulletLine_container}>
            <BulletPoint/>
            <div className={style.bullet_point_line}></div>
        </div>
    )
}

export default BulletPointLine;