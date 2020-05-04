import React from 'react';
import '../Style/Qreview.css';
import Aux from './Wrap';

const Qreview=(props)=>{
    return(
        <Aux>
            <div className="reWraper">
                <div className="qWrp">
                    <h1 className="rewQ"><span>{props.qDetails.id}</span> {props.qDetails.question}</h1>
                    <div className="reQimgs">
                        <img src={props.qDetails.questionImgUrl} className="reImg" alt="pic for quation"/>
                    </div>
                    <div className="reThorey">
                        <h4 className="theroryHader">Theory</h4>
                        <p className="theory">{props.qDetails.theory}</p>
                    </div>
                    <div className="solWrap">
                        <h4 className="solveHader">How to slove</h4>
                        <p className="solveStep">
                            {props.qDetails.solution}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                            <p className="QcAnswer"> Correct Answer : <span className="answerR">{props.qDetails.correctAnswer}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}
export default Qreview;