import React,{useState,useEffect} from 'react';
import Aux from './Wrap';
import '../Style/Layout.css'
import { NavLink } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import HomeImg from '../CoverImgs/Home.png';
import Url from '../Url';
import RegisterSModal from './RegisterStudent';
import RegisterTModal from './RegisterTeacher';
import Login from './Login';

const Layout=(props)=>{
    const [grade,setGrade] = useState([]);
    const [registerSModel,setRegisterSModel] = useState(false);
    const [registerTModel,setRegisterTModel] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        fetch(Url+'/v1/tutor/grades?medium=si').then(res=>res.json()).then((response)=>{
            setGrade(response);
        })
        },[]
    )

    const subjectHandler=(lan)=>{
        setGrade([]);
        fetch(Url+'/v1/tutor/grades?medium='+lan).then(res=>res.json()).then((response)=>{
            setGrade(response);
        })
    }
    const onHideSM=()=>setRegisterSModel(false);
    const onHideTM=()=>setRegisterTModel(false);
    const handleClose = () => setShow(false);
    return(
        <Aux>
            <div className="myContainer">
                <div className="navB">
                    <div className="MyRow">
                        <div className="col-2">
                            <h2 className="mainHead">eSchool.com</h2>
                        </div>
                        <div className="col-10">
                            <a href="#/" className="navBtn signBtn" onClick={()=>setShow(true)}>Sign In</a>
                            <DropdownButton id="dropdown-basic-button" title="Register" className="navBtn">
                                <Dropdown.Item href="#/action-1" onClick={()=>setRegisterSModel(true)}>As a Student</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"
                                onClick={()=>setRegisterTModel(true)}
                                >As a Teacher</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton id="dropdown-basic-button" title="Language" className="navBtn">
                                <Dropdown.Item href="#/action-1" onClick={()=>subjectHandler("si")}>සිංහල </Dropdown.Item>
                                <Dropdown.Item href="#/action-2"
                                onClick={()=>subjectHandler("en")}
                                >English</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </div>
                <div className="gradeNav">
                    <div id="gradetbl">
                        <NavLink to="/" className="gradeBtn" exact><img src={HomeImg} alt="Home" id="homeLogo"/></NavLink>
                        {
                            grade.map((gra)=>
                                <NavLink to={{pathname:["/Lesson/",gra.id].join("")}} key={gra.id} className="gradeBtn" 
                                >{gra.name}</NavLink>
                            )
                        }
                    </div>
                </div>
                <main>
                    {props.children}
                </main>
            </div>
            <RegisterSModal show={registerSModel} hide={onHideSM}/>
            <RegisterTModal show={registerTModel} hide={onHideTM}/>
            <Login show={show} handleClose={handleClose}/>
        </Aux>
    );
}

export default Layout;