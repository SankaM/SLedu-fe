import React from 'react';
// import '../Style/Qreview.css';
import Aux from './Wrap';
import CorImg from '../CoverImgs/correct.png';
import WroImg from '../CoverImgs/Wrong.png';
import QuImg from '../CoverImgs/questionMark.png';

const Qreview=(props)=>{
    let obj = props.Uanswer.find(obj=>obj.id===props.qDetails.id);
    let wrongAnswer;
    let markImg;
    if(obj.Uanswer === props.qDetails.correctAnswer){
        wrongAnswer = null;
        markImg = <img src={CorImg} alt="corr Img" className="markImg"/>
    }
    else{
        if(obj.Uanswer === null){
            wrongAnswer = <p className="QwAnswer">You Not Answered</p>
            markImg = <img src={QuImg} alt="Not answerd Img" className="markImg"/>
        }
        else{
            markImg = <img src={WroImg} alt="Wrong Img" className="markImg"/>
            wrongAnswer = <p className="QwAnswer"> Your Answer : <span className="answerRw">{obj.Uanswer}</span></p>
        }
    }
    return(
        <Aux>
            <div className="reWraper">
                {markImg}
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
                        <div className="col-6">
                            {wrongAnswer}
                        </div>
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