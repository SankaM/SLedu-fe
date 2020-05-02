import React, { Component } from 'react';
import Layout from '../components/Layout';
import Qcard from '../components/Qcard';
import Qreviwe from '../components/Qreview';
import {Modal,Button} from 'react-bootstrap';
import '../Style/common.css';
import '../Style/Quationing.css';
class Examing extends Component {
    state = { quations:[] ,
                currentPage:1,
                quationPerPage:1,
                resultModel:false,
                loading:false, 
                corrAns:0,
                wronAns:0,
                mark:0
            }   
        
            componentDidMount(){
                this.getQuation();
                // fetch('http://ec2-54-255-240-216.ap-southeast-1.compute.amazonaws.com:3005/v1/tutorials/questions').then(responc=> responc.json()).then(res=>{
                //     this.setState({
                //         quations:res
                //     })
                // })
            }
            getQuation=()=>{
                this.setState({loading:true})
                fetch('http://ec2-54-255-240-216.ap-southeast-1.compute.amazonaws.com:3005/v1/tutorials/questions').then(responc=> responc.json()).then(res=>{
                    this.setState({
                        quations:res
                    })
                })
                this.setState({loading:false})
            }

            markGanarator=(corr,wro)=>{
                let mark = corr/(corr+wro) * 100
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
        console.log(this.state.quations);
        console.log(this.state.loading);
        const indexOfLastQuation = this.state.currentPage * this.state.quationPerPage;
        const indexOfFirstQuation = indexOfLastQuation - this.state.quationPerPage;
        const currentQuation = this.state.quations.slice(indexOfFirstQuation,indexOfLastQuation);
        let show = this.state.resultModel
        return (
                <Layout>
                    <div>
                        <h6 className="root">Grade 5 / ganithaya / Parimithiya</h6>
                        
                            {<Qcard Quations={currentQuation} 
                            paginateAnswer={this.paginate} getReslt={this.markGanarator} loading={this.state.loading}/> }
                            <button onClick={()=>{console.log(currentQuation);console.log(this.state.quations)}}> click</button>
    
                    </div>
                    <Modal
                        size="lg"
                        show={show}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                    <div className="model_body">
                        <div id="mark">{this.state.mark}%</div>
                        <div className="haderWrap">
                            <h1 className="expHader">Explaintor</h1>
                        </div>
                        <h3 className="subHaderModel">You have successfully  faced for <span className="hader_Num">{this.state.currentPage}</span> Quations</h3>
                        <div className="row">
                            <div className="col-6">
                                <h3 className="subHaderModel2">Number of wrongs :  <span className="hader_Num">{this.state.wronAns}</span></h3>
                            </div>
                            <div className="col-6">
                                <h3 className="subHaderModel2">Number of Correct :  <span className="hader_Num">{this.state.corrAns}</span></h3>
                            </div>
                        </div>
                        <div>
                            <Qreviwe/>
                            <Qreviwe/>
                            <Qreviwe/>
                        </div>
                        <Button onClick={()=>{this.setState({resultModel:false})}}>Click Me</Button>
                    </div>
                    </Modal>
                </Layout>
           );
    }
}
 
export default Examing;