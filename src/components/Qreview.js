import React from 'react';
import '../Style/Qreview.css';
import Aux from './Wrap';

const Qreview=(props)=>{
    return(
        <Aux>
            <div className="reWraper">
                <div className="qWrp">
                    <h1 className="rewQ"> 01 පහත දී ඇති රුපයේ පරිමිතිය සොයන්න</h1>
                    <div className="reQimgs">
                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="reImg" alt="pic for quation"/>
                    </div>
                    <div className="reThorey">
                        <h4 className="theroryHader">Theory</h4>
                        <p className="theory">සමචතුරශ්‍ර්යක පරිමිතිය  =  එක් පැත්තක දිග  x  4</p>
                    </div>
                    <div className="solWrap">
                        <h4 className="solveHader">How to slove</h4>
                        <p className="solveStep">
                            පරිමිතිය = 6cm x 4 <br/>
                            = 24 cm 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                            <p className="QcAnswer"> Correct Answer : <span className="answerR">24 cm</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}
export default Qreview;