import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";


const SubParaWithMultiMedia = (props) => {
  useEffect(() => {
    console.log("Image", props.img);
  }, []);
  return (
    <div>
      {props.type === "mainRight" && (
        <div className="row">
          <div className="col-4">
            <div className="artImgSec">
              <div className="column">
                {props.img.length !== 0 && props.img.map((url,index)=>
                  <img src={url} alt={url} key={index} className="artiImg" />
                )}
              </div>

              <div className="column">
                <img src={props.img.temp3} alt="artImg" className="artiImg" />
              </div>
            </div>
          </div>
          <div className="col-8">
            <p>{ReactHtmlParser(props.para)}</p>
          </div>
        </div>
      )}
      {props.type === "mainLeft" && (
        <div className="row">
          <div className="col-8">
            <p>{ReactHtmlParser(props.para)}</p>
          </div>
          <div className="col-4">
            <div className="artImgSec">
              <div className="column">
              {props.img.length !== 0 && props.img.map((url,index)=>
                <img src={url} alt={url} key={index} className="artiImg" />
              )}
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
