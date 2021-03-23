import React, { Component } from 'react';
import Layout from '../components/Layout';
import Artical from '../components/Artical';
import '../Style/home.css';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Layout>
                    <div id="homeContainer">
                        <div className="leftCol">
                            <h2 className="leftHader">Share your Knowlage with us</h2>
                            <div className="createSec">
                                <a href="/CreateArtical" className="creContentLink">
                                    <div className="creContent">
                                        <span className="creContTxt">Write Artical</span>
                                    </div>
                                </a>
                                <a href="#/" className="creContentLink">
                                    <div className="creContent">
                                        <span className="creContTxt">Create Image collection</span>
                                    </div>
                                </a>
                                <a href="#/" className="creContentLink">
                                    <div className="creContent">
                                        <span className="creContTxt">Create Video</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="MidleCol">
                            <h2 className="homeHader">Knowledge of around the world</h2>
                            <div className="articalSec">
                                <Artical/>
                                <Artical/>
                            </div>
                        </div>
                        <div className="RightCol">
                            <h2 className="rihtSideHader">Top Ten Students</h2>
                            <div className="topStuSec">
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Sanka Weerakoon</span>
                                        <span className="rnk">1</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Sasanka thushan</span>
                                        <span className="rnk">2</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Dhnajaya weerkoon</span>
                                        <span className="rnk">3</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                               <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5area.jpg" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Lakmal tharindu</span>
                                        <span className="rnk">4</span>
                                    </div>
                               </a>
                            </div>
                            <h2 className="rihtSideHader">Lastweek Top Articals </h2>
                            <div className="topArtSec">
                                <a href="#/" className="stuRankSecLink">
                                    <div className="stuRankSec">
                                        <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5parimithiya.png" className="rnkProfImg" alt="prof Img"/>
                                        <span className="rnkProfName">Albert einstain</span>
                                        <span className="rnk"></span>
                                    </div>
                               </a>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div> 
            );
    }
}
 
export default Home;