import React, { Component } from 'react';
import Layout from '../components/Layout';
import SideMap from '../components/SideMap'
import Lcard from '../components/LessonCard';
import '../Style/Grade5.css';
import parimiImg from '../CoverImgs/_5parimithiya.png'
import areaImg from '../CoverImgs/_5area.jpg'
import { Link } from 'react-router-dom';
class _5maths extends Component {
    state = { 
        subject:["ගණිතය","පරිසරය","සිංහල","බුද්ධ ධර්මය","ඉංග්‍රීසි","දෙමල"],
        Lessons:[]
     }

    render() { 
        const contain = <div>
                            <Link to="/Examing">
                                <Lcard lesson="පරිමිතිය" ImgSrc={parimiImg}/>
                            </Link>
                            <Lcard lesson="වර්ගඵලය" ImgSrc={areaImg}/>
                            <Lcard lesson="භාග" ImgSrc={parimiImg}/>
                            <Lcard lesson="කාලය" ImgSrc={parimiImg}/>
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
                        <SideMap Subject={this.state.subject}/>
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