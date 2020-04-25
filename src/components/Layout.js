import React from 'react';
import Aux from './Wrap';
import '../Style/Layout.css'
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap';
const Layout=(props)=>{
    return(
        <Aux>
            <div className="navB">
                <div className="row">
                    <div className="col-2">
                        <h2 className="mainHead">තක්සලාව</h2>
                    </div>
                    <div className="col-10">
                        <Link to="/_5maths" className="navBtn signBtn">Sign In</Link>
                        <DropdownButton id="dropdown-basic-button" title="Register" className="navBtn">
                            <Dropdown.Item href="#/action-2">As a Teacher</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">As a Student</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
            <div className="gradeNav">
                <div id="gradetbl">
                    <Link to="/_5maths" className="gradeBtn">Grade 5</Link>
                    <Link to="#" className="gradeBtn">Grade 6</Link>
                </div>
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;