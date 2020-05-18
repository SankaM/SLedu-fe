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
            wrong:0
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         answers:this.props.Quations[0].otherAnswers,
    //     })
    // }
    
   componentWillReceiveProps(nextProps){
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = true;
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

    // submitAnswer=()=>{
    //     if(this.state.UserAnswer=== null){
    //         swal({
    //             title: "You did not select any answer",
    //             text: "Please select the answer",
    //             icon: "warning",
    //             closeOnClickOutside: false,
    //             button: "Ok",
    //           })
    //     }
    //     else
    //     {
    //         if(this.state.UserAnswer === this.props.Quations[0].correctAnswer)
    //         {
    //             swal({
    //                 title: "Yes ! It's correct",
    //                 text: "Very good,Keep going",
    //                 icon: "success",
    //                 closeOnClickOutside: false,
    //                 button: "Go Ahead",
    //               }).then(()=>{
    //                 this.props.paginateAnswer();
    //                 this.props.getReslt(this.state.correct,this.state.wrong);
    //               });
                
    //             let corr = this.state.correct;
    //             corr++;
    //             this.setState({
    //                 correct:corr
    //             })
    //         }
    //         else 
    //         {
    //             swal({
    //                 title: "Oh! It's wrong",
    //                 text: "It's ok,Keep going",
    //                 icon: "error",
    //                 button: "Go Ahead",
    //                 closeOnClickOutside: false,
    //             }).then(()=>{
    //                 this.props.paginateAnswer();
    //                 this.props.getReslt(this.state.correct,this.state.wrong);
    //             })
    //             let wro = this.state.wrong;
    //             wro++;
    //             this.setState({
    //                 wrong:wro
    //             })
    //         }
    //     }
    //     this.props.getCorection(this.props.Quations[0].id,this.state.UserAnswer)
    // }

    ckeckBoxHandlerOne=()=>{
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer1.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer1.value);
        }
    }
    ckeckBoxHandlerTwo=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer3.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer2.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer2.value);
        }
    }
    ckeckBoxHandlerThree=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer4.checked = false;
        if(this.refs.answer3.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer3.value);
        }
    }
    ckeckBoxHandlerFour=()=>{
        this.refs.answer1.checked = false;
        this.refs.answer2.checked = false;
        this.refs.answer3.checked = false;
        if(this.refs.answer4.checked){
            this.props.UpdateResult(this.props.Quations[0].id,this.refs.answer4.value);
        }
    }
   
    render() { 
        return ( 
            <Aux>
            <div>
                <div className="MyRow">
                    <div className="col-2">
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