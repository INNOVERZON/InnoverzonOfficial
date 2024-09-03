import React from "react";
import style from "./WorkFlow.module.css";
import BulletPointLine from "../../../components/BulletPointLine/BulletPointLine";
import workflow from "../../../assets/images/workflow.svg";


const WorkFlow = () =>{
    return(
        <div className={style.workflow_container}>
            <div>
                <div className={style.title}>
                    <div> <span>O</span>UR &nbsp; <span>W</span>ORK &nbsp; <span>F</span>LOW</div>
                </div>
                <BulletPointLine className={style.bullet}/>
                <div className={style.workflow_content}>
                    At INNOVERZON, we believe that a well-defined and efficient workflow is key to delivering exceptional results.
                    Our process is designed to ensure transparency, collaboration, and quality at every stage of the project.
                </div>
            </div>
            <div className={style.workflow_image}>
                <img src={workflow} alt=""/>
            </div>
        </div>
    )
}

export default WorkFlow;