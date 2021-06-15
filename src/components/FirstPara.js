import React from "react";
import "../Style/ArticalPage.css";
import ReactHtmlParser from 'react-html-parser';

const FirstPara = (props) => {
  return (
    <div>
      <h1 className="NoteHed">Albert einstain</h1>
      <div className="firstPara">
      {ReactHtmlParser (props.para)}
      </div>
      <div className="initPicSec">
      {props.img.length !== 0 && props.img.map((url,index)=>
        <img src={url} alt={url} key={index} className="articalPageHaderImages" />
      )}
      
      </div>
    </div>
  );
};
export default FirstPara;
