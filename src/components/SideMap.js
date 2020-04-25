import React from 'react';
import Aux from './Wrap';
import '../Style/SideMap.css'
import { Link } from 'react-router-dom';
const SideMap=(props)=>{
    console.log(props.Subject)
    return(
        <Aux>
            <div id="sideMap">
            {
                props.Subject.map(sub=>
                    <Link to="/#" className="sideMaplink"><h3 className="sideMapBtn">{sub}</h3></Link>
                )
            }
            </div>
        </Aux>
    );
}
export default SideMap;