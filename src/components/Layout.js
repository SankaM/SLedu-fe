import React,{useState,useEffect} from 'react';
import Aux from './Wrap';
import '../Style/Layout.css'
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import HomeImg from '../CoverImgs/Home.png';
// import axios from '../axios-getData'

const Layout=(props)=>{
    const [grade,setGrade] = useState([]);
    useEffect(()=>{
            fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/grades?medium=si').then(res=>res.json()).then((response)=>{
                setGrade(response);
            })
            // axios.get('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/grades?medium=si').then(res=>res.json()).then((response)=>{
            //     setGrade(response);
            //     console.log(response)
            // })
        },[]
    )
    const HadleClick=(event)=>{
        let gradList = document.querySelectorAll('.gradeBtn');
        gradList.forEach(el => {
            el.style.background = "none";
            el.style.color= "darkcyan"
        });
        event.target.style.background = 'rgb(48, 180, 180)';
        event.target.style.color= "#120136"
    }
    return(
        <Aux>
            <div className="myContainer">
                <div className="navB">
                    <div className="MyRow">
                        <div className="col-2">
                            <h2 className="mainHead">eSchool.com</h2>
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
                        <Link to="/" className="gradeBtn"><img src={HomeImg} alt="Home" id="homeLogo"/></Link>
                        {
                            grade.map((gra)=>
                                <Link to={{pathname:["/Lesson/",gra.id].join("")}} key={gra.id} className="gradeBtn"
                                    onClick={(e)=>HadleClick(e)} 
                                >{gra.name}</Link>
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