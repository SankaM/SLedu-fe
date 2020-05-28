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

const Artical=(props)=>{
    const [seeMore,SetSeeMore] = useState("none");
    const [seeMoreHandler,SetseeMoreHandler] = useState("block");
    const [collapse,SetCollapse] = useState("block");
    return(
        <Aux>
            <div className="articalContainer">
                <div className="articalFromSec">
                    <img src="https://sl-edu.s3-ap-southeast-1.amazonaws.com/cover-images/_5parimithiya.png" alt="profile" className="articalprofImg"/>
                    <span className="articalFrom">eSchool News</span>
                </div>
                <h3 className="artiHAder">Albert einstain</h3>
                <div className="atriText">
                    <p className="artiIntrduct">Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science <a href="#/" onClick={()=>{SetSeeMore("block");SetseeMoreHandler("none")}} style={{display:seeMoreHandler}}>read more</a></p>
                    <p className="artiMore" style={{display:seeMore}}>
                    Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274 His work is also known for its influence on the philosophy of science.[7][8] He is best known to the general public for his mass–energy equivalence formula E = mc2, which has been dubbed "the world's most famous equation".[9] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[10] a pivotal step in the development of quantum theory.

                    The son of a salesman who later operated an electrochemical factory, Einstein was born in the German Empire but moved to Switzerland in 1895 and renounced his German citizenship in 1896.[5] Specializing in physics and mathematics, he received his academic teaching diploma from the Swiss Federal Polytechnic School (German: eidgenössische polytechnische Schule, later ETH) in Zürich in 1900. The following year, he acquired Swiss citizenship, which he kept for his entire life. After initially struggling to find work, from 1902 to 1909 he was employed as a patent examiner at the Swiss Patent Office in Bern.
                    
                    Near the beginning of his career, Einstein thought that Newtonian mechanics was no longer enough to reconcile the laws of classical mechanics with the laws of the electromagnetic field. This led him to develop his special theory of relativity during his time at the Swiss Patent Office. In 1905, called his annus mirabilis (miracle year), he published four groundbreaking papers, which attracted the attention of the academic world; the first outlined the theory of the photoelectric effect, the second paper explained Brownian motion, the third paper introduced special relativity, and the fourth mass-energy equivalence. That year, at the age of 26, he was awarded a PhD by the University of Zurich.
                    <a href="#/" onClick={()=>{SetSeeMore("none");SetseeMoreHandler("block");SetCollapse("none")}} style={{display:collapse}}>Collapse artical</a>
                    </p>
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