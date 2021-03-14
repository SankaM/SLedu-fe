import React from 'react';
import Aux from './Wrap';
import '../Style/SideMap.css'
import { Link } from 'react-router-dom';
const SideMap=(props)=>{

    const HadleClick=(event)=>{
        let gradList = document.querySelectorAll('.sideMapBtn');
        gradList.forEach(el => {
            el.style.background = "linear-gradient(90deg, rgba(224,173,199,1) 0%, rgba(255,255,255,1) 68%, rgba(224,173,199,1) 86%)";
            el.style.color= "black"
        });
        event.target.style.background = 'rgb(104, 230, 104)';
        event.target.style.color= "#120136"
    }
    return(
        <Aux>
            <div id="sideMap">
            {
                props.Subject.map(sub=>
                    <Link to="#" key={sub.id} className="sideMaplink" onClick={(e)=>{
                        props.getLesson(sub.id);
                        HadleClick(e);
                    }}><h3 className="sideMapBtn">{sub.name}</h3></Link>
                )
            }
            </div>
        </Aux>
    );
}
export default SideMap;