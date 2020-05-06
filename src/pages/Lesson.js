import React, { Component } from 'react';
import Layout from '../components/Layout';
import SideMap from '../components/SideMap'
import Lcard from '../components/LessonCard';
import '../Style/Grade5.css';
import { Link } from 'react-router-dom';
class _5maths extends Component {
    constructor(props){
        super(props);
        this.state = { 
            subject:[],
            Lessons:[]
         }
    }
    componentWillMount(){
        this.getSubject(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps){
        this.getSubject(nextProps.match.params.id);
    }
    
    getSubject=(id)=>{
        fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/subjects?gradeId='+id).then(res=>res.json()).then((response)=>{this.setState({subject:response})})
    }
    
    getLesson=(Sid)=>{
        fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/lessons?subjectId='+Sid).then(res=>res.json()).then((response)=>{
            this.setState({Lessons:response});
        })
    }

    render() { 
        let contain;
        if(this.state.Lessons.length === 0 ){
            contain = <h1>Sorry No lessons</h1>
        }
        else{
            contain = <div>
                        {
                            this.state.Lessons.map((les)=>
                                <Link to={"/Examing/"+les.id} key={les.id}>
                                    <Lcard lesson={les.name} ImgSrc={les.imageUrl}/>
                                </Link>
                            )
                            
                        }
                      </div>
        }
       
        return (
            <Layout>
                <div className="row">
                    <div className="col-2">
                        {<SideMap Subject={this.state.subject} getLesson={this.getLesson}/>}
                    </div>
                    <div className="col-8">
                        {contain}
                    </div>
                </div>
            </Layout>
          );
    }
}
export default _5maths;