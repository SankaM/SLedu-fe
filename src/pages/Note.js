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
            content:[
                {
                    mainTopicId:1,
                    mainTopicName:"පරිමිතිය යනු 1",
                    subTop:[
                        {
                            subTopicId:1_1,
                            subTopicName:"සමචතුරස්රයක පරිමිතිය1"
                        },
                        {
                            subTopicId:1_2,
                            subTopicName:"සමචතුරස්රයක පරිමිතිය2"
                        }
                    ]
                },
                {
                    mainTopicId:2,
                    mainTopicName:"පරිමිතිය යනු 2",
                    subTop:[]
                },
                {
                    mainTopicId:3,
                    mainTopicName:"පරිමිතිය යනු 3",
                    subTop:[
                        {
                            subTopicId:3_1,
                            subTopicName:"සමචතුරස්රයක පරිමිතිය"
                        },
                        {
                            subTopicId:3_2,
                            subTopicName:"සමචතුරස්රයක පරිමිතිය"
                        }
                    ]
                }
            ],
            Note : [
                {
                    topicId:1,
                    subTopicId:1_1,
                    topic:"පරිමිතිය යනු 1",
                    subTopicName:"සමචතුරස්රයක පරිමිතිය ",
                    ImgForDefUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5parimithiya.png",
                    Definition:"පරිමිතිය යනු යම්කිසි තල රුපයක් වටා මුළු දිග ප්‍රමාණය වේ",
                    Theory:" a theorem attributed to Pythagoras that the square on the hypotenuse of a      right-angled triangle is equal in area to the sum of the squares on the other two sides.",
                    ImgForTheoeyUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png",
                    Example:" Start with:	a2 + b2 = c2 , Put in what we know:	52 + 122 = c2,Calculate squares:	25 + 144 = c2,25+144=169:	169 = c2,Swap sides:	c2 = 169,Square root of both sides:	c = √169,Calculate:	c = 13,",
                    ImgForExampleUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png"
                },
                {
                    topicId:1,
                    subTopicId:1_2,
                    topic:"පරිමිතිය යනු 2",
                    subTopicName:"සමචතුරස්රයක පරිමිතිය ",
                    ImgForDefUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5parimithiya.png",
                    Definition:"පරිමිතිය යනු යම්කිසි තල රුපයක් වටා මුළු දිග ප්‍රමාණය වේ",
                    Theory:" a theorem attributed to Pythagoras that the square on the hypotenuse of a      right-angled triangle is equal in area to the sum of the squares on the other two sides.",
                    ImgForTheoeyUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png",
                    Example:" Start with:	a2 + b2 = c2 , Put in what we know:	52 + 122 = c2,Calculate squares:	25 + 144 = c2,25+144=169:	169 = c2,Swap sides:	c2 = 169,Square root of both sides:	c = √169,Calculate:	c = 13,",
                    ImgForExampleUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png"
                },
                {
                    topicId:2,
                    subTopicId:2_1,
                    topic:"පරිමිතිය යනු 3",
                    subTopicName:"සමචතුරස්රයක පරිමිතිය ",
                    ImgForDefUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5parimithiya.png",
                    Definition:"පරිමිතිය යනු යම්කිසි තල රුපයක් වටා මුළු දිග ප්‍රමාණය වේ",
                    Theory:" a theorem attributed to Pythagoras that the square on the hypotenuse of a      right-angled triangle is equal in area to the sum of the squares on the other two sides.",
                    ImgForTheoeyUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png",
                    Example:" Start with:	a2 + b2 = c2 , Put in what we know:	52 + 122 = c2,Calculate squares:	25 + 144 = c2,25+144=169:	169 = c2,Swap sides:	c2 = 169,Square root of both sides:	c = √169,Calculate:	c = 13,",
                    ImgForExampleUrl:"https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/fraction.png"
                }
            ],
            Remember:["සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 4","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 5","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 6","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 7","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 8","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 9","සමචතුරස්රයක පරිමිතිය = පැත්තක දිග x 10"],
            referanceVideo:["74kuKshEBvg","zRdPDSYacNs","yDNAHuyJJQI"]
        }
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
                                <div className="containSec">
                                    <h5 className="remHed">contents</h5>
                                   {this.state.content.map((cont)=>{
                                        if(cont.subTop.length === 0){
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
                                                    >{cont.mainTopicName}</a><span className="arrowImgSpan"><img src={Darrow}
                                                    alt="dawn Arrow" className="Darrow"/></span>
                                                    <div className="subTopSec">
                                                        <ul>
                                                            {cont.subTop.map((sTop)=>{
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
                                </div>
                                <div className="rememberSec">
                                    <h5 className="remHed">Remember</h5>
                                    {
                                        this.state.Remember.map((rem)=><h4 className="remLi">{rem}</h4>)
                                    }
                                </div>
                            </div>
                            <div className="col-7">
                                {
                                    this.state.Note.map((note)=><NoteFact NoteDetails={note}/>)
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