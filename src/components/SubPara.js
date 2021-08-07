import React from "react";
import ReactHtmlParser from "react-html-parser";

const SubPara = (props) => {
  return (
    <div>
      <p>
       {ReactHtmlParser(props.para)}
      </p>
    </div>
  );
};
export default SubPara;
