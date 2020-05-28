import React, { Component } from 'react';
// import Layout from '../components/Layout';
import TestQcard from '../components/TestQcard';
import Pagination from '../components/Paginate';
import {Modal} from 'react-bootstrap';
import Qreviwe from '../components/Qreview';
import '../Style/Test.css'
class Test extends Component {
    constructor(props){
        super(props);
        this.state ={
            lesId : this.props.match.params.id2,
            currentPage:1,
            quationPerPage:1,
            Result:[],
            TestResultModel:false,
            corrAns: 0,
            NoAns:0,
            wronAns:0,
            Mark:0,
            TestQuestion:[
                {
                    correctAnswer:"24 cm",
                    id:1,
                    lessonId:2,
                    otherAnswers:["25 cm", "23 cm", "22 cm", "24 cm"],
                    question: "පහත දී ඇති රුපයේ පරිමිතිය සොයන්න",
                    questionImgUrl: "https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg",
                    solution: "පරිමිතිය = 6cm x 4 = 24 cm",
                    theory: "සමචතුරශ්‍ර්යක පරිමිතිය = එක් පැත්තක දිග x 4"
                },
                {
                    correctAnswer: "30 cm",
                    id: 2,
                    lessonId: 2,
                    otherAnswers:["25 cm", "23 cm", "30 cm", "24 cm"],
                    question: "පහත දී ඇති රුපයේ පරිමිතිය සොයන්න",
                    questionImgUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg",
                    solution: "පරිමිතිය = 6cm x 4 = 24 cm",
                    theory: "සමචතුරශ්‍ර්යක පරිමිතිය = එක් පැත්තක දිග x 4"
                },
                {
                    correctAnswer: "40 cm",
                    id: 3,
                    lessonId: 2,
                    otherAnswers:["25 cm", "40 cm", "30 cm", "24 cm"],
                    question: "පහත දී ඇති රුපයේ පරිමිතිය සොයන්න",
                    questionImgUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg",
                    solution: "පරිමිතිය = 6cm x 4 = 24 cm",
                    theory: "සමචතුරශ්‍ර්යක පරිමිතිය = එක් පැත්තක දිග x 4"
                }
            ]
        }
    }

    componentDidMount(){
        this.setResult(this.state.TestQuestion);
        this.changeAnswers(this.state.TestQuestion);
    }

 
    changeAnswers=(questionSet)=>{
        questionSet.forEach((el)=>{
            let AnsArry = el.otherAnswers;
            let i = AnsArry.length -1;
        
            for(i; i > 0 ; i--){
                const j = Math.floor(Math.random() * (i + 1));
                const temp = AnsArry[i];
                AnsArry[i] =  AnsArry[j];
                AnsArry[j] = temp;
            }
            el.otherAnswers = AnsArry
        })
        this.setState({TestQuestion:questionSet})
    }
 
    setResult=(questionArry)=>{
        let res = this.state.Result;
        questionArry.forEach(element => {
            res.push({id:element.id,Canswer:element.correctAnswer,Uanswer:null})
        });
        this.setState({Result:res});
        // console.log(this.state.Result);
    }

    UpdateResult=(id,Uans)=>{
        let res = this.state.Result;
        for(var i=0;i<res.length;i++ ){
            if(res[i].id===id && res[i].Uanswer !==Uans){
                res[i].Uanswer = Uans;
            }
        }
        this.setState({Result:res});
    }
    getMark=()=>{
        let res = this.state.Result;
        let corr= 0;
        let NoAns = 0;
        let wrong =0 ; 
        res.forEach(res=>{
            if(res.Canswer === res.Uanswer){
                corr+=1;
            }
            else if(res.Uanswer === null){
                NoAns++;
            }
            else{
                wrong++;
            }
        })
        let mark = (corr/(corr+wrong+NoAns) * 100).toFixed(1);
        this.setState({
            wronAns:wrong,
            NoAns:NoAns,
            corrAns:corr,
            Mark:mark
        })
    }
    paginateNest =()=>{
        let curr = this.state.currentPage;
        curr++;
        this.setState({currentPage:curr})
     }
    render() { 
        const indexOfLastQuation = this.state.currentPage * this.state.quationPerPage;
        const indexOfFirstQuation = indexOfLastQuation - this.state.quationPerPage;
        const currentQuation = this.state.TestQuestion.slice(indexOfFirstQuation,indexOfLastQuation);
        const paginate = pageNumber => this.setState({currentPage:pageNumber})
        const TestExplanationHandler =()=> this.setState({TestResultModel:true})
        let showResult = this.state.TestResultModel;
        return (
                    <div className="TestRow">
                        <TestQcard Quations={currentQuation} 
                        paginateAnswer={this.paginate} getReslt={this.markGanarator} getCorection={this.setcorrection} UpdateResult={this.UpdateResult} Result={this.state.Result}
                        ExplFun={TestExplanationHandler}
                        getMark={this.getMark}
                        paginateNest={this.paginateNest}
                        />
                        <div className="col-8 paginationSec">
                            <Pagination Tquestion={this.state.TestQuestion.length} paginate={paginate}/>                    
                        </div>
                        <Modal
                        size="lg"
                        show={showResult}
                        aria-labelledby="example-modal-sizes-title-lg"
                        >
                        <div className="model_body">
                            <div id="mark">{this.state.Mark}%</div>
                            <div className="haderWrap">
                                <h1 className="expHader">Explanation</h1>
                            </div>
                            <h3 className="subHaderModel">You have successfully  faced for <span className="hader_Num">{this.state.currentPage}</span> Quations</h3>
                            <div className="row">
                                <div className="col-4">
                                    <h3 className="subHaderModel2">Correct :  <span className="hader_Num">{this.state.corrAns}</span></h3>
                                </div>
                                <div className="col-4">
                                    <h3 className="subHaderModel2">wrong :  <span className="hader_Num">{this.state.wronAns}</span></h3>
                                </div>
                                <div className="col-4">
                                    <h3 className="subHaderModel2">No answered :  <span className="hader_Num">{this.state.NoAns}</span></h3>
                                </div>
                            </div>
                            <div>
                            {
                                this.state.TestQuestion.map((question)=><Qreviwe qDetails={question} Uanswer={this.state.Result}/>)
                            }
                            </div>
                            <a href={"/Lesson/"+this.state.lesId} onClick={()=>{this.setState({TestResultModel:false});
                        }} className="btn btn-light">Close</a>
                        </div>
                    </Modal>
                    </div>
          );
    }
}
 
export default Test;