import React,{useState} from 'react';
import Aux from './Wrap';
import '../Style/Artical.css';
import temp1 from '../CoverImgs/tempImg1.jpg';
import temp2 from '../CoverImgs/tempImg2.jpg';
import temp3 from '../CoverImgs/tempImg3.jpg';
import temp4 from '../CoverImgs/tempImg4.jpg';
import Like from '../CoverImgs/like.png';
import UnLike from '../CoverImgs/DisLike.png';
import Comment from '../CoverImgs/comment.png';
import Url from '../Url';

const Artical=(props)=>{
    const [seeMore,SetSeeMore] = useState("none");
    const [seeMoreHandler,SetseeMoreHandler] = useState("block");
    const [collapse,SetCollapse] = useState("block");
    return(
        <Aux>
            <div className="articalContainer">
                <div className="articalFromSec">
                    <img src={Url+"/cover-images/_5parimithiya.png"} alt="profile" className="articalprofImg"/>
                    <span className="articalFrom">eSchool News</span>
                </div>
                <h3 className="artiHAder">Albert einstain</h3>
                <div className="atriText">
                    <p className="artiIntrduct">Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science <a href="/Artical/1" onClick={()=>{SetSeeMore("block");SetseeMoreHandler("none")}}>read more</a></p>
                </div>
                <div className="artImgSec">
                    <div className="column">
                        <img src={temp1} alt="artImg" className="artiImg"/>
                        <img src={temp2} alt="artImg" className="artiImg"/>
                    </div>
                   
                    <div className="column">
                        <img src={temp3} alt="artImg" className="artiImg"/>
                        <img src={temp4} alt="artImg" className="artiImg"/>
                    </div>

                </div>
                <div className="interestSec">
                    <div className="column">
                        <div className="NoOfLikeCom">
                            698
                        </div>
                        <div className="likeComSec" role="button">
                            <img src={Like} alt="like button" className="likeBtn"/> 
                        </div>
                    </div>
                    <div className="column">
                        <div className="NoOfLikeCom">
                            86
                        </div>
                        <div className="likeComSec">
                            <img src={Comment} alt="like button" className="likeBtn"/> 
                        </div>
                    </div>
                </div>
                <div className="viewComSec">
                    <a href="#/" className="vieComBtn"><span>View Comments</span></a>
                    <div className="commentSec">
                    </div>
                    <input class="comInput" type="text" placeholder="Write your comments"/>
                </div>
            </div>
        </Aux>
    )
}
export default Artical;