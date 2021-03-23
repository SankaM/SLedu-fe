import React, { useEffect, useState } from "react";
import NoImage from "../CoverImgs/NoImage.jpg";

const RightPara = (props) => {
  const [image, setImage] = useState([]);
  const imgHandlaer = (event) => {
    let tempImg = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const ObjectUrl = URL.createObjectURL(event.target.files[i]);
      tempImg.push(ObjectUrl);
    }
    setImage(tempImg);
  };
  return (
    <div className="row">
      <div className="col-4">
        <label className="ImgUpBtn">
          {image.length > 0 ? (
            <img src={image[0]} alt="Upload Profile pic" className="profImg" />
          ) : (
            <img src={NoImage} alt="Upload Profile pic" className="profImg" />
          )}
          {image.length > 1 ? (
            <img src={image[1]} alt="Upload Profile pic" className="profImg" />
          ) : (
            <img src={NoImage} alt="Upload Profile pic" className="profImg" />
          )}
          {image.length > 2 ? (
            <img src={image[2]} alt="Upload Profile pic" className="profImg" />
          ) : (
            <img src={NoImage} alt="Upload Profile pic" className="profImg" />
          )}
          {image.length > 3 ? (
            <img src={image[3]} alt="Upload Profile pic" className="profImg" />
          ) : (
            <img src={NoImage} alt="Upload Profile pic" className="profImg" />
          )}
          <input
            type="file"
            id="browsArticalMainImg1"
            className="d-none"
            onChange={imgHandlaer}
            multiple
          />
        </label>
      </div>
      <div className="col-8">
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default RightPara;
