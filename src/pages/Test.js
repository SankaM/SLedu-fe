import React, { Component } from 'react';
import Layout from '../components/Layout';
import TestQcard from '../components/TestQcard';
import Pagination from '../components/Paginate';
import '../Style/Test.css'
class Test extends Component {
    constructor(props){
        super(props);
        this.state ={
            quastionId : this.props.match.params.id,
            currentPage:1,
            quationPerPage:1,
            Result:[],
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
        this.setResult(this.state.TestQuestion)
    }
    setResult=(questionArry)=>{
        let res = this.state.Result;
        questionArry.forEach(element => {
            res.push({QId:element.id,Canswer:element.correctAnswer,Uanswers:null})
        });
        this.setState({Result:res});
        console.log(this.state.Result);
    }

    UpdateResult=(id,Uans)=>{
        let res = this.state.Result;
        for(var i=0;i<res.length;i++ ){
            if(res[i].QId===id && res[i].Uanswers !==Uans){
                res[i].Uanswers = Uans;
            }
        }
        this.setState({Result:res});
        console.log(this.state.Result);
    }

    markGanarator=(corr,wro)=>{
        let mark = (corr/(corr+wro) * 100).toFixed(1);
        this.setState({
            corrAns:corr,
            wronAns:wro,
            mark:mark
        })
    }

    paginate=()=>{
        let i = this.state.currentPage;
        if(this.state.currentPage === this.state.TestQuestion.length){
            // this.setState({
            //     resultModel:true
            // })
        }
        else{
            i++;
            this.setState({currentPage:i})
        }
    }
    render() { 
        const indexOfLastQuation = this.state.currentPage * this.state.quationPerPage;
        const indexOfFirstQuation = indexOfLastQuation - this.state.quationPerPage;
        const currentQuation = this.state.TestQuestion.slice(indexOfFirstQuation,indexOfLastQuation);
        const paginate = pageNumber => this.setState({currentPage:pageNumber})
        return (
                <Layout>
                    <div className="TestRow">
                        <TestQcard Quations={currentQuation} 
                        paginateAnswer={this.paginate} getReslt={this.markGanarator} getCorection={this.setcorrection} UpdateResult={this.UpdateResult}/>
                        <div className="col-8 paginationSec">
                            <Pagination Tquestion={this.state.TestQuestion.length} paginate={paginate}/>                    
                        </div>
                    </div>
                </Layout>
          );
    }
}
 
export default Test;