import React, { Component } from 'react';
import Layout from '../components/Layout';
import NoteFact from '../components/NoteFact'
import '../Style/Note.css';
import VideoModel from '../components/VideoModel';
import Darrow from '../CoverImgs/arrow.png'
// import Uarrow from '../CoverImgs/Uarrow.png'

class Note extends Component{
    constructor(props){
        super(props);
        this.state ={
            show:false,
            content:[],
            Note : [],
            Remember:["සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 4","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 5","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 6","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 7","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 8","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 9","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 10"],
            referanceVideo:["74kuKshEBvg","zRdPDSYacNs","yDNAHuyJJQI"]
        }
    }

    componentDidMount(){
        this.getContentAndDefaultNote(this.props.match.params.id);
    }
    getContentAndDefaultNote=(id)=>{
        fetch('http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005/v1/tutor/topics?lessonId='+id).then(res=>res.json()).then((Response)=>
            this.setState({
                content:Response.topics,
                Note:Response.defaultSmartNote
            })
        )
    }
    HadleContent=(event)=>{
        let temp = event.target.nextSibling.nextSibling
        if(temp.style.display === "block")
        {
            temp.style.display = "none"
        }
        else{
            temp.style.display = "block"
        }
    }
    render(){
        const{VidId}= this.state;
        let VideoModelClose=()=>{this.setState({show:false})}
        return(
            <Layout>
                <div className="container-fluid">    
                    <div className="Note_Sec">
                        <h1 className="NoteHed">Smart Note</h1>
                        <div className="row">
                            <div className="col-3">
                                {this.state.content?(<div className="containSec">
                                    <h5 className="remHed">contents</h5>
                                   {this.state.content.map((cont)=>{
                                        if(cont.subTopicList.length === 0){
                                           return (
                                               <div className="content_link_sec">
                                                    <a href="#/" className="content_link">{cont.mainTopicName}</a>
                                               </div>
                                           )
                                       }
                                       else
                                       return( 
                                                <div className="content_link_sec">
                                                    <a href="#/" className="content_link"
                                                        onClick={(e)=>this.HadleContent(e)}
                                                    >{cont.topicName}</a><span className="arrowImgSpan"><img src={Darrow}
                                                    alt="dawn Arrow" className="Darrow"/></span>
                                                    <div className="subTopSec">
                                                        <ul>
                                                            {cont.subTopicList.map((sTop)=>{
                                                                return(
                                                                    <li>
                                                                        <a className="subToplink"
                                                                            href="#/"
                                                                        >
                                                                            {sTop.subTopicName}
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                           )
                                   })}
                                </div>):null}
                                <div className="rememberSec">
                                    <h5 className="remHed">Remember</h5>
                                    {
                                        this.state.Remember.map((rem)=><h4 className="remLi">{rem}</h4>)
                                    }
                                </div>
                            </div>
                            <div className="col-7">
                                {
                                    <NoteFact NoteDetails={this.state.Note}/>
                                }
                            </div>
                            <div className="col-2">
                                <div className="refVidSec">
                                    <h5 className="remHed">Referance Video</h5>
                                    {this.state.referanceVideo.map((vid)=>
                                        <a href="#/" onClick={()=>{this.setState({VidId:vid,show:true})}}>
                                            <img src={"https://i.ytimg.com/vi/"+vid+"/hqdefault.jpg"}
                                            className="refVid"
                                            alt="referance video"
                                            />
                                        </a>
                                        )   
                                    }
                                </div>
                            </div>
                        </div>
                        <a href={"/Examing/"+this.props.match.params.id} id="quationBtn">Go Practice</a>
                    </div>
                </div>
                <VideoModel Show={this.state.show} VidId={VidId} VidClose={VideoModelClose}/>
            </Layout>
        );
    }
}
export default Note;