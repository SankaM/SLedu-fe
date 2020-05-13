import React from 'react';
import '../Style/Note.css';
import Aux from './Wrap';

const NoteFact=(props)=>{
    if(props.NoteDetails){
    return(
        <Aux>
            <div className="mainDefSec">
                <h5 className="MainTopic">{props.NoteDetails.topic}</h5>
                <div className="mainDef">
                    <h4 className="defHed">Definition</h4>
                    <div className="mainDefImgSec">
                        <img src={props.NoteDetails.ImgForDefUrl} alt="Main Definition"  className="MainDefImg"/>
                    </div>
                    <p className="defPara">{props.NoteDetails.Definition
                    }</p>
                </div>
                <div className="thoerySec">
                    <h5 className="defHed">Theorem</h5>
                    <div className="row">
                        <div className="col-8 thoery">
                            {props.NoteDetails.Theory}
                        </div>
                        <div className="col-4 thorryImgSec">
                            <img src={props.NoteDetails.ImgForTheoeyUrl} className="theoryImg" alt="for theory"/>
                        </div>   
                    </div>
                </div>
               {/*  <p className="Note">
                    a theorem attributed to Pythagoras that the square on the hypotenuse of a right-angled triangle is equal in area to the sum of the squares on the other two sides. a theorem attributed to Pythagoras that the square on the hypotenuse of a right-angled triangle is equal in area to the sum of the squares on the other two sides. a theorem attributed to Pythagoras that the square on the hypotenuse of a right-angled triangle is equal in area to the sum of the squares on the other two sides.
                </p> */}
                <div className="exapSec">
                    <h5 className="defHed">Example</h5>
                        <div className="row">
                            <div className="col-4 thorryImgSec">
                                <img src={props.NoteDetails.ImgForExampleUrl} className="theoryImg" alt="for theory"/>
                            </div> 
                            <div className="col-8 Exmple">
                                {props.NoteDetails.Example}
                            </div>
                        </div>
                </div>
            </div>
        </Aux>
    )
            }
            else{
                return(<h5>Loading...</h5>)
            }
}
export default NoteFact;