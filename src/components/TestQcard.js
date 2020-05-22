import React, { Component } from 'react';
import Aux from './Wrap';
import '../Style/Qcard.css';
// import swal from '@sweetalert/with-react';

class TestQcard extends Component {
    constructor(props){
        super(props);
        this.state = {
            answers:this.props.Quations[0].otherAnswers,
            UserAnswer: null,
            correct:0,
            wrong:0,
            h:0,
            m:0,
            s:0,
            timeRun:0,
            clockFun:()=>{}
        }
    }
    run=()=>{
        var updateH = this.state.h,updateM = this.state.m,updateS = this.state.s;
        var timeRun = this.state.timeRun;
        timeRun +=1;
        this.setState({timeRun:timeRun})
        document.getElementById("TimeOverlay").style.display = "none";
        if(timeRun >= 30){
            document.getElementById("EndOverlay").style.display = "block";
            clearInterval(this.state.clockFun);
        }else{
            if(updateM === 60){
                updateH++;
                updateM = 0;
            }
            if(updateS === 60){
                updateM++;
                updateS = 0
            }
            updateS++;
            this.setState({
                h:updateH,
                m:updateM,
                s:updateS
            })
        }
    }
    start=()=>{
        this.run();
        this.setState({clockFun:setInterval(this.run,1000)})
    }
   componentWillReceiveProps(nextProps){
        this.setState({
            answers:nextProps.Quations[0].otherAnswers
        });
        var answer = nextProps.Result.find(item=>item.QId === this.props.Quations[0].id)
        if(answer.Uanswers === this.refs.answer1.value){
            this.refs.answer1.checked = true;
            this.refs.answer2.checked = false;
            this.refs.answer3.checked = false;
            this.refs.answer4.checked = false;
        }
        else if(answer.Uanswers === this.refs.answer2.value){
            this.refs.answer2.checked = true;
            this.refs.answer1.checked = false;
            this.refs.answer3.checked = false;
            this.refs.answer4.checked = false;
        }
        else if(answer.Uanswers === this.refs.answer3.value){
            this.refs.answer3.checked = true;
            this.refs.answer1.checked = false;
            this.refs.answer2.checked = false;
            this.refs.answer4.checked = false;
        }
        else if(answer.Uanswers === this.refs.answer4.value){
            this.refs.answer4.checked = true;
            this.refs.answer1.checked = false;
            this.refs.answer2.checked = false;
            this.refs.answer3.checked = false;
        }
        else{
            this.refs.answer1.checked = false;
            this.refs.answer2.checked = false;
            this.refs.answer3.checked = false;
            this.refs.answer4.checked = false;
        }
   }
    
    ckeckBoxHandlerOne=()=>{
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer1.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer1.value);
        }
        else{
            this.props.UpdateResult(this.props.Quations[0].id,null);
        }
    }
    ckeckBoxHandlerTwo=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer2.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer2.value);
        }
        else{
            this.props.UpdateResult(this.props.Quations[0].id,null);
        }
    }
    ckeckBoxHandlerThree=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer3.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer3.value);
        }
        else{
            this.props.UpdateResult(this.props.Quations[0].id,null);
        }
    }
    ckeckBoxHandlerFour=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        if(this.refs.answer4.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer4.value);
        }
        else{
            this.props.UpdateResult(this.props.Quations[0].id,null);
        }
    }
   
    render() { 
        return ( 
            <Aux>
            <div id="TimeOverlay">
                <h1>Test No 1</h1>
                <h3>There are have 30 questions </h3>
                <h3>You have 30 minite to compleate this test</h3>
                <button onClick={()=>{this.start()}} className="startBtn">Start</button>
            </div>
            <div id="EndOverlay">
                <h1>Time is over</h1>
                <button onClick={()=>{}} className="startBtn">Go to Explanation</button>
            </div>
            <div>
                <div className="MyRow">
                    <div className="col-2 timeSec">
                        <div className="clockSec">
                            <div className="clockItem">
                                <div className="clId">H</div>
                                {this.state.h}
                            </div>
                            :
                            <div className="clockItem">
                                <div className="clId">M</div>
                                {this.state.m}
                            </div>
                            :
                            <div className="clockItem">
                                <div className="clId">S</div>
                                {this.state.s}
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="Qcard pb-4">
                            <h1 className="quation">
                                <span>{this.props.Quations[0].id}  </span>{this.props.Quations[0].question}
                            </h1>
                            <div className="qImg">
                                <img src={this.props.Quations[0].questionImgUrl} className="quationImg" alt="quationimage" />
                            </div>
                            <div className="row mt-5 mb-4">
                                <div className="col-6">
                                    <div className="answer">
                                        <label className="lebAns">
                                            <input type="checkbox" 
                                            value={this.state.answers[0]}
                                            ref="answer1"
                                            onClick={()=>
                                                this.ckeckBoxHandlerOne()
                                            }
                                            className="ansCheck"
                                            />
                                            &nbsp;&nbsp;&nbsp;{this.state.answers[0]}
                                        </label>
                                    </div>
                                    <div className="answer">
                                        <label className="lebAns">
                                            <input type="checkbox" 
                                            value={this.state.answers[1]}
                                            ref="answer2"
                                            onClick={this.ckeckBoxHandlerTwo}
                                            className="ansCheck"
                                            />
                                            &nbsp;&nbsp;&nbsp;{this.state.answers[1]}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="answer">
                                        <label className="lebAns">
                                            <input type="checkbox" 
                                            value={this.state.answers[2]}
                                            ref="answer3"
                                            onClick={this.ckeckBoxHandlerThree}
                                            className="ansCheck"
                                            />
                                            &nbsp;&nbsp;&nbsp;{this.state.answers[2]}
                                        </label>
                                    </div>
                                    <div className="answer">
                                        <label className="lebAns">
                                            <input type="checkbox"
                                            value={this.state.answers[3]}
                                            ref="answer4"
                                            onClick={this.ckeckBoxHandlerFour}
                                            className="ansCheck"
                                            />
                                            &nbsp;&nbsp;&nbsp;{this.state.answers[3]}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
            </Aux>
         );
    }
}
 
export default TestQcard;