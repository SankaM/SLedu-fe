import React, { Component } from 'react';
import Aux from './Wrap';
import '../Style/Qcard.css';
import areaImg from '../CoverImgs/_5area.jpg';
import { Button } from 'react-bootstrap';

class Qcard extends Component {
    constructor(props){
        super(props);
        this.state = {
            answers : this.props.Quations[0].otherAnswers,
            UserAnswer: null
        }
    }

   componentWillReceiveProps(nextProps){
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        this.suffleAnswer(nextProps.Quations[0].otherAnswers);
        this.setState({
            UserAnswer:null
        })
   }
    suffleAnswer=(arry)=>{
        let AnsArry = arry;
        let i = AnsArry.length -1;
        
        for(i; i > 0 ; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = AnsArry[i];
            AnsArry[i] =  AnsArry[j];
            AnsArry[j] = temp;
        }
        
        this.setState({
            answers : AnsArry
        })
    }

    submitAnswer=()=>{
        if(this.state.UserAnswer === this.props.Quations[0].correctAnswer){
            alert("Yes!! you are correct")
        }
        else alert("Ohh!!! You are wrong")
    }
    ckeckBoxHandlerOne=()=>{
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer1.checked){
            this.setState({
                UserAnswer:this.refs.answer1.value
            })
        }
        else
        {
            this.setState({
                UserAnswer:null
            })
        }
    }
    ckeckBoxHandlerTwo=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer2.checked){
            this.setState({
                UserAnswer:this.refs.answer2.value
            })
        }
        else
        {
            this.setState({
                UserAnswer:null
            })
        }
    }
    ckeckBoxHandlerThree=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer3.checked){
            this.setState({
                UserAnswer:this.refs.answer3.value
            })
        }
        else
        {
            this.setState({
                UserAnswer:null
            })
        }
    }
    ckeckBoxHandlerFour=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        if(this.refs.answer4.checked){
            this.setState({
                UserAnswer:this.refs.answer4.value
            })
        }
        else
        {
            this.setState({
                UserAnswer:null
            })
        }
    }
   
    render() { 
        return ( 
            <Aux>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="Qcard col-8">
                        <h1 className="quation">
                            <span>01 </span>{this.props.Quations[0].quation}
                        </h1>
                        <div className="qImg">
                            <img src={areaImg} className="quationImg" alt="quationimage" />
                        </div>
                        <div className="row mt-5 mb-4">
                            <div className="col-6">
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" 
                                        value={this.state.answers[0]}
                                        ref="answer1"
                                        onClick={this.ckeckBoxHandlerOne}
                                        />
                                        &nbsp;&nbsp;{this.state.answers[0]}
                                    </label>
                                </div>
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" 
                                        value={this.state.answers[1]}
                                        ref="answer2"
                                        onClick={this.ckeckBoxHandlerTwo}
                                        />
                                        &nbsp;&nbsp;{this.state.answers[1]}
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
                                        />
                                        &nbsp;&nbsp;{this.state.answers[2]}
                                    </label>
                                </div>
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox"
                                        value={this.state.answers[3]}
                                        ref="answer4"
                                        onClick={this.ckeckBoxHandlerFour}
                                        />
                                        &nbsp;&nbsp;{this.state.answers[3]}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="btnWrap">
                            <button className="submitBtn mb-3" onClick={this.submitAnswer}>Submit</button>
                        </div>
                    </div>
                    <div className="col-2">
                        <Button onClick={this.props.paginateAnswer}>Next</Button>
                    </div>
                </div>
               
            </Aux>
         );
    }
}
 
export default Qcard;