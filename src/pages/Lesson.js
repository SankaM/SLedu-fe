import React, { Component } from 'react';
import Layout from '../components/Layout';
import SideMap from '../components/SideMap'
import Lcard from '../components/LessonCard';
import '../Style/Grade5.css';
import { Link } from 'react-router-dom';
import StartWalker from '../Animations/walking.gif';
import LoadingTedy from '../Animations/animated-teddy.gif'
class _5maths extends Component {
    constructor(props){
        super(props);
        this.state = { 
            currentGrade:null,
            subject:[],
            Lessons:[],
            changed:true,
            data:this.props.location.state,
         }
    }
    componentWillMount(){
        this.getSubject(this.props.match.params.id);                     
        this.setState({currentGrade:this.props.match.params.id});                                                                                                                           
    }
    componentWillReceiveProps(nextProps){
        this.getSubject(nextProps.match.params.id);
        if(this.state.currentGrade===nextProps.match.params.id){
            this.setState({changed:false});
        }
        else{
            this.setState({changed:true});
        }
        this.setState({currentGrade:nextProps.match.params.id})

    }
    getSubject=(id)=>{
        fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/subjects?gradeId='+id).then(res=>res.json()).then((response)=>{this.setState({subject:response})})
    }
    
    getLesson=(Sid)=>{
        fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/lessons?subjectId='+Sid).then(res=>res.json()).then((response)=>{
            this.setState({Lessons:response});
        })
        this.setState({inraduction:true})
    }
    render() { 
        let contain;
        if(this.state.changed){
            contain = 
            <div className="startContent">
                <h3 className="startConHead">Select a subject for study</h3>
                <img src={StartWalker} className="StartWalker" alt="tedy"/>
            </div>
        }
        else{
            if(this.state.Lessons.length === 0 ){
                contain = <div className="waitConSec">
                                <h3 className="waitConSecHed">Sorry No lessons entered yet</h3>
                                <h5 className="waitConSecHed2">lessons will  enter soon</h5>
                                <img src={LoadingTedy} alt="Loading" className="waitConSecImg"/>
                          </div>
            }
            else{
                contain = <div>
                            <h4 className="ConHead">Learn With Quations</h4>
                            {  
                                this.state.Lessons.map((les)=>
                                    <Link to={"/Note/"+les.id} key={les.id}>
                                        <Lcard lesson={les.name} ImgSrc={les.imageUrl}/>
                                    </Link>
                                )  
                            }
                            </div>
            }
        }
        
       
        return (
            <Layout>
                <div className="lesRow">
                    <div className="col-2 sideMapSec">
                        {<SideMap Subject={this.state.subject} getLesson={this.getLesson}/>}
                    </div>
                    <div className="col-8">
                        {contain}
                    </div>
                    <div className="col-2 revSec">
                        <h4 className="revHeder">Revistion</h4>
                    </div>
                </div>
            </Layout>
          );
    }
}
export default _5maths;