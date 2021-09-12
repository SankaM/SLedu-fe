import React from 'react';
import RightPara from '../components/RightPara'
import LeftPara from '../components/LeftPara'
import Para from "../components/Para";

// let articalContext = [
    //   ...context,
    //   <RightPara paraNo={context.length + 1} removePara={removePara}  key={context.length + 1}/>,
    // ];
const ParaController=(props)=>{
    return(
        <div>
            {props.type === "mainRight" && <RightPara paraNo={props.paraNo} />}
            {props.type === "mainLeft" && <LeftPara paraNo={props.paraNo} />}
            {props.type === "onlyPara" && <Para paraNo={props.paraNo} />}
        </div>
    )
}
export default ParaController;