import React from 'react';
import Aux from './Wrap';
// import '../Style/signUp.css'
import {Modal,Form} from 'react-bootstrap'

const Login=(props)=>{
    return(
        <Aux>
        <Modal show={props.show}>
           <div className="loginContainer">
                <div className="center">
                    <h2 class="mainHead">eSchool.com</h2>
                </div>
                <div className="logformWraper">
                    <Form>
                        <div className="form-group">
                            <label className="form-label lLabel">Email</label>
                            <input className="form-control srcontrol" type="text" placeholder="Ex :- peterparker.com" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label lLabel">Password</label>
                            <input className="form-control srcontrol" type="text" placeholder="Password" required/>
                        </div>
                        <div className="center">
                            <a href="#/">Forgot password</a>
                        </div>
                    </Form>
                </div>
                <div className="row mb-1">
                    <div className="col-6 center">
                        <a href="#/" onClick={props.handleClose} className="btn btn-dark">Cancel</a>
                    </div>
                    <div className="col-6 center">
                        <a href="#/" onClick={props.handleClose} className="btn btn-primary">Login</a>
                    </div>
                </div>
           </div>
        </Modal>
        </Aux>
    )
}

export default Login;