import React, { useState, useEffect } from "react";
import "../Style/ArticalPage.css";
import LayOut from "../components/Layout";
import FirstPara from "../components/FirstPara";
import SubParaWithMultiMedia from "../components/SubParaWithMultiMedia";
import SubPara from "../components/SubPara";
import temp1 from "../CoverImgs/tempImg1.jpg";
import temp2 from "../CoverImgs/tempImg2.jpg";
import temp3 from "../CoverImgs/tempImg3.jpg";
const articalDemoData = [
  {
    part: 4,
    text:
      "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc ",
    images: [],
    type: "onlyPara",
  },
  {
    part: 1,
    text:
      "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc ",
    images: [temp1, temp2, temp3],
    type: "main",
  },
  {
    part: 3,
    text:
      "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc ",
    images: [temp1, temp2, temp3],
    type: "mainRight",
  },
  {
    part: 2,
    text:
      "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of th two pillars of modern physics. His work is also known for its influence on the philosophy of science Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of scienc ",
    images: [temp1, temp2, temp3],
    type: "mainLeft",
  },
];
const Articl = (props) => {
  const [orderedArtical, setOrderedArtical] = useState([]);
  const [artical, setArtical] = useState([]);
  const setOrder = (artical) => {
    console.log("artical",artical)
    const orderdArtical = artical.sort((a, b) => {
      return a.part - b.part;
    });
    setOrderedArtical(orderdArtical);
  };
  useEffect(() => {
    setOrder(props.articalContext);
  }, []);
  return (
    <LayOut>
      <div className="container-fluid">
        <div className="articalPage">
          {orderedArtical.map((part) => {
              if (part.type === "main") {
                return <FirstPara para={part.text} img={part.images} />;
              } else if (part.type === "mainRight") {
                return (
                  <SubParaWithMultiMedia
                    type={"mainRight"}
                    para={part.text}
                    img={part.images}
                  />
                );
              } else if (part.type === "mainLeft") {
                return (
                  <SubParaWithMultiMedia
                    type={"mainLeft"}
                    para={part.text}
                    img={part.images}
                  />
                );
              } else if (part.type === "onlyPara") {
                return <SubPara para={part.text} />;
              }
          })}
        </div>
      </div>
    </LayOut>
  );
};
export default Articl;
