import React,{useState,useEffect} from 'react';
import Aux from './Wrap';
import '../Style/Layout.css'
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap';


const Layout=(props)=>{
    const [grade,setGrade] = useState([]);
    useEffect(()=>{
            fetch('http://ec2-54-255-240-216.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/grades?medium=si').then(res=>res.json()).then((response)=>{
                setGrade(response);
            })
        }
    )
    return(
        <Aux>
            <div className="myContainer">
                <div className="navB">
                    <div className="MyRow">
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
                        {
                            grade.map((gra)=>
                                <Link to={["/_5maths/",gra.id].join("")} key={gra.id} className="gradeBtn">{gra.name}</Link>
                            )
                        }
                    </div>
                </div>
                <main>
                    {props.children}
                </main>
            </div>
        </Aux>
    );
}

export default Layout;