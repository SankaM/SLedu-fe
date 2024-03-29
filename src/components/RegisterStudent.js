import React, { Component } from 'react';
import {Modal,Form} from 'react-bootstrap';
import ProfImg from '../CoverImgs/ProfImage.png'
import Aux from './Wrap';
// import '../Style/signUp.css'

class RegisterModel extends Component{
    constructor(props){
        super(props);
        this.state={
              profPhoto:ProfImg
        }
    }
    proImgHandlaer=(event)=>{
        const ObjectUrl = URL.createObjectURL(event.target.files[0]);
        this.setState({
            profPhoto:ObjectUrl
        })
    }
    render(){
        return(
            <Aux>
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                >
                <div className="authWraper">
                    <h3 className="srHader">Students Registration</h3>
                    <Form>
                        <div className="row">
                            <div className="col-8 srCol">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label srLabel">First Name</label>
                                            <input className="form-control srcontrol" type="text" placeholder="Ex :- Peter" required/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label srLabel">Last Name</label>
                                            <input className="form-control srcontrol" type="text" placeholder="Ex :-Parker" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label srLabel">Student Email Address</label>
                                    <input className="form-control srcontrol" type="text" placeholder="Ex :- peterparker@gmail.com" required/>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label srLabel">Password</label>
                                            <input className="form-control srcontrol" type="password" placeholder="Password" required/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-label srLabel">Conform Password</label>
                                            <input className="form-control srcontrol" type="password" placeholder="Re-enter Password" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 proImgSec">
                                <label className="ImgUpBtn">
                                    <img src={this.state.profPhoto} alt="Upload Profile pic" className="profImg"/>
                                    <input type="file" id="browsPrfImg" className="d-none" onChange={this.proImgHandlaer}/>
                                    <h3 className="proImgHader">Add profile Image</h3>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">School Name</label>
                                    <input className="form-control srcontrol" type="text" placeholder="College / University / Institute" required/>
                                </div>
                            </div>
                            <div className="col-4 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">Currant Grade</label>
                                    <input className="form-control srcontrol" type="text" placeholder="Grade 8" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">Country</label>
                                    <input className="form-control srcontrol" type="text" placeholder="Ex :- Sri Lanka" required/>
                                </div>
                            </div>
                            <div className="col-6 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">Dare of Birth</label>
                                    <input className="form-control srcontrol" type="date" placeholder="Grade 8" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">Permanente Address</label>
                                    <input className="form-control srcontrol" type="address" placeholder="Ex :- No-25/7 Park Rd,Colombo 7" required/>
                                </div>
                            </div>
                            <div className="col-4 srCol">
                                <div className="form-group">
                                    <label className="form-label srLabel">Contact Number</label>
                                    <input className="form-control srcontrol" type="number" placeholder="088 34####78" required/>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <div className="row">
                        <div className="col-6 center">
                            <button className="btn btn-dark" onClick={this.props.hide}>Cancel</button>
                        </div>
                        <div className="col-6 center">
                            <button className="btn btn-dark" onClick={this.props.hide}>Submit</button>
                        </div>
                    </div>
                </div>
                </Modal>
            </Aux>
        )
    }
}
export default RegisterModel;