import React from 'react';
import Aux from './Wrap';
import '../Style/SideMap.css'
import { Link } from 'react-router-dom';
const SideMap=(props)=>{
    return(
        <Aux>
            <div id="sideMap">
            {
                props.Subject.map(sub=>
                    <Link to="#" key={sub.id} className="sideMaplink" onClick={()=>{
                        props.getLesson(sub.id)
                    }}><h3 className="sideMapBtn">{sub.name}</h3></Link>
                )
            }
            </div>
        </Aux>
    );
}
export default SideMap;