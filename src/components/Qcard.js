import React, { Component } from 'react';
import Aux from './Wrap';
import '../Style/Qcard.css';
import areaImg from '../CoverImgs/_5area.jpg';

class Qcard extends Component {
    state = {  }
    render() { 
        return ( 
            <Aux>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="Qcard col-8">
                        <h1 className="quation">
                            <span>01 </span>පහත දී ඇති රුපයේ පරිමිතිය සොයන්න 
                        </h1>
                        <div className="qImg">
                            <img src={areaImg} className="quationImg" alt="quationimage" />
                        </div>
                        <div className="row mt-5 mb-4">
                            <div className="col-6">
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" value=""/>
                                        &nbsp;&nbsp;26 cm
                                    </label>
                                </div>
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" value=""/>
                                        &nbsp;&nbsp;23 cm
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" value=""/>
                                        &nbsp;&nbsp;24 cm
                                    </label>
                                </div>
                                <div className="answer">
                                    <label className="lebAns">
                                        <input type="checkbox" value=""/>
                                        &nbsp;&nbsp;25 cm
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="btn btn-dark submitBtn mb-3">Submit</a>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
               
            </Aux>
         );
    }
}
 
export default Qcard;