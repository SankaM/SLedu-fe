import React, { Component } from 'react';
import Layout from '../components/Layout';
import Qcard from '../components/Qcard';
import '../Style/common.css'
class Examing extends Component {
    state = { quations:[
                    {   
                        "quationId":1,
                        "quation":"පහත දී ඇති රුපයේ පරිමිතිය සොයන්න",
                        "correctAnswer":"24 cm",
                        otherAnswers:["25 cm","23 cm","22 cm","24 cm"]
                    },
                    {
                        "quationId":2,
                        "quation":"පැතත්ක  දිග 4cm  සමචතුරශ්‍රයක පරිමිතිය සොයන්න ",
                        "correctAnswer":"16 cm",
                        otherAnswers:["20 cm","15 cm","17 cm","16 cm"]
                    },
                    {   
                        "quationId":3,
                        "quation":"පැතත්ක  දිග 9 cm  සවිධි පන්චාශ්‍රයක  පරිමිතිය සොයන්න ",
                        "correctAnswer":"45 cm",
                        otherAnswers:["42 cm","50 cm","48 cm","45 cm"]
                    }
                ] ,
                currentPage:1,
                quationPerPage:1
            }   
        
            paginate=()=>{
                let i = this.state.currentPage;
                i++;
                if(i<=3){
                    this.setState({currentPage:i})
                }  
            }

    render() { 
        const indexOfLastQuation = this.state.currentPage * this.state.quationPerPage;
        const indexOfFirstQuation = indexOfLastQuation - this.state.quationPerPage;
        const currentQuation = this.state.quations.slice(indexOfFirstQuation,indexOfLastQuation);
        return (
                <Layout>
                    <div>
                        <h6 className="root">Grade 5 / ganithaya / Parimithiya</h6>
                        
                            <Qcard Quations={currentQuation} 
                            paginateAnswer={this.paginate}/>

                    </div>
                </Layout>
           );
    }
}
 
export default Examing;