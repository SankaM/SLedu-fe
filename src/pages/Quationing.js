import React, { Component } from 'react';
import Layout from '../components/Layout';
import Qcard from '../components/Qcard';
import Qreviwe from '../components/Qreview';
import {Modal,Button} from 'react-bootstrap';
import Loading from '../Animations/Loading.gif';
// import '../Style/common.css';
// import '../Style/Quationing.css';
import Url from '../Url';
class Examing extends Component {
    state = {   quations:[] ,
                Uanswers:[],
                currentPage:1,
                quationPerPage:1,
                resultModel:false,
                loading:true,
                corrAns:0,
                wronAns:0,
                mark:0
            }   
            componentWillMount(){
                this.getQuation(this.props.match.params.id); 
            }
            getQuation=(id)=>{
                fetch(Url+'/v1/tutor/questions?lessonId='+id).then(responc=> responc.json()).then(res=>{
                    this.setState({
                        quations:res,
                        loading:false
                    })
                })

            }

            setcorrection=(id,userAnswer)=>{
                this.state.Uanswers.push({id:id,Uanswer:userAnswer})
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
                if(this.state.currentPage === this.state.quations.length){
                    this.setState({
                        resultModel:true
                    })
                }
                else{
                    i++;
                    this.setState({currentPage:i})
                }
            }
    render() { 
        const indexOfLastQuation = this.state.currentPage * this.state.quationPerPage;
        const indexOfFirstQuation = indexOfLastQuation - this.state.quationPerPage;
        const currentQuation = this.state.quations.slice(indexOfFirstQuation,indexOfLastQuation);

        let show = this.state.resultModel
        if(this.state.quations.length === 0){
            return(<Layout>
                <div className="loadingWrap">
                    <img src={Loading} alt="loading" className="loading"/>
                </div>
                  </Layout>)
        }
        else{
            return (
                <Layout>
                    <div>
                        <h6 className="root">Grade 5 / ganithaya / Parimithiya</h6>
                            {<Qcard Quations={currentQuation} 
                            paginateAnswer={this.paginate} getReslt={this.markGanarator} getCorection={this.setcorrection}/>} 
                    </div>
                    <Modal
                        size="lg"
                        show={show}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                    <div className="model_body">
                        <div id="mark">{this.state.mark}%</div>
                        <div className="haderWrap">
                            <h1 className="expHader">Explanation</h1>
                        </div>
                        <h3 className="subHaderModel">You have successfully  faced for <span className="hader_Num">{this.state.currentPage}</span> Quations</h3>
                        <div className="row">
                            <div className="col-6">
                                <h3 className="subHaderModel2">Correct :  <span className="hader_Num">{this.state.corrAns}</span></h3>
                            </div>
                            <div className="col-6">
                                <h3 className="subHaderModel2">wrong :  <span className="hader_Num">{this.state.wronAns}</span></h3>
                            </div>
                        </div>
                        <div>
                        {
                            this.state.quations.map((question)=><Qreviwe qDetails={question} Uanswer={this.state.Uanswers}/>)
                        }
                        </div>
                        <Button onClick={()=>{this.setState({resultModel:false})}}>Click Me</Button>
                    </div>
                    </Modal>
                </Layout>
           );
        }
        
    }
}
 
export default Examing;