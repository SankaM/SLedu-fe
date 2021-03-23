import React from "react";
import "../Style/ArticalPage.css";

const FirstPara = (props) => {
  return (
    <div>
      <h1 className="NoteHed">Albert einstain</h1>
      <div className="firstPara">
        <p className="interestingPara">
          Albert Einstein was a German-born theoretical physicist who developed
          the theory of relativity, one of the two pillars of modern physics.
          His work is also known for its influence on the philosophy of science
          Albert Einstein was a German-born theoretical physicist who developed
          the theory of relativity, one of the two pillars of modern physics.
          His work is also known for its influence on the philosophy of science
        </p>
      </div>
      <div className="initPicSec">
        <img src={props.img.temp1} alt="temp1" className="articalPageHaderImages" />
        <img src={props.img.temp2} alt="temp1" className="articalPageHaderImages" />
        <img src={props.img.temp3} alt="temp1" className="articalPageHaderImages" />
      </div>
    </div>
  );
};
export default FirstPara;
