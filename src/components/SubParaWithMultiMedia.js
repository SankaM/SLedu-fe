import React,{useEffect} from "react";
import temp1 from "../CoverImgs/tempImg1.jpg";
import temp2 from "../CoverImgs/tempImg2.jpg";
import temp3 from "../CoverImgs/tempImg3.jpg";

const SubParaWithMultiMedia = (props) => {
  useEffect(()=>{
    console.log("Image",props.img);
  },[])
  return (
    <div>
      {props.type === "mainRight" && (
        <div className="row">
          <div className="col-4">
            <div className="artImgSec">
              <div className="column">
                <img src={props.img.temp1} alt="artImg" className="artiImg" />
                <img src={props.img.temp2} alt="artImg" className="artiImg" />
              </div>

              <div className="column">
                <img src={props.img.temp3} alt="artImg" className="artiImg" />
              </div>
            </div>
          </div>
          <div className="col-8">
            <p>
              {props.para}
            </p>
          </div>
        </div>
      )}
      {props.type === "mainLeft" && (
        <div className="row">
          <div className="col-8">
            <p>
              {props.para}
            </p>
          </div>
          <div className="col-4">
            <div className="artImgSec">
              <div className="column">
                <img src={props.img.temp1} alt="artImg" className="artiImg" />
                <img src={props.img.temp2} alt="artImg" className="artiImg" />
              </div>

              <div className="column">
                <img src={props.img.temp3} alt="artImg" className="artiImg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubParaWithMultiMedia;
