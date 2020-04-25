import React from 'react';
import Aux from './Wrap';
import '../Style/LCard.css'

const LessonCard=(props)=>{
    return(
        <Aux>
            <div className="lCard">
                <h1 className="lesName">{props.lesson}</h1>
                <div className="limg">
                    <img src={props.ImgSrc} alt="lesson cover" className="LesImg"/>
                </div>
            </div>
        </Aux>
    )
}

export default LessonCard;