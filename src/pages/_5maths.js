import React, { Component } from 'react';
import Layout from '../components/Layout';
import SideMap from '../components/SideMap'
import Lcard from '../components/LessonCard';
import '../Style/Grade5.css';
import parimiImg from '../CoverImgs/_5parimithiya.png'
import areaImg from '../CoverImgs/_5area.jpg'
import { Link } from 'react-router-dom';
class _5maths extends Component {
    constructor(props){
        super(props);
        this.state = { 
            subject:[],
            Lessons:[]
         }
    }
    componentDidMount(){
        this.getSubject();
    }
    componentWillReceiveProps(){
        this.getSubject();
    }
    getSubject=()=>{
        const {id} = this.props.match.params
        fetch('http://ec2-54-255-240-216.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/subjects?gradeId='+id).then(res=>res.json()).then((response)=>{this.setState({subject:response})})
    }
    
    render() { 
        const contain = <div>
                            <Link to="/Examing">
                                <Lcard lesson="පරිමිතිය" ImgSrc={parimiImg}/>
                            </Link>
                            <Lcard lesson="වර්ගඵලය" ImgSrc={areaImg}/>
                            <Lcard lesson="භාග" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/clock.jpg"/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
                        </div>
        return (
            <Layout>
                <div className="row">
                    <div className="col-2">
                        {<SideMap Subject={this.state.subject}/>}
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