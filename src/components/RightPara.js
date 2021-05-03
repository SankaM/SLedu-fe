import React, { useEffect, useState } from "react";

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
        <label className="ImgUpBtnSubPara">
          <input
            type="file"
            id="browsArticalMainImg1"
            className="d-none"
            onChange={imgHandlaer}
            multiple
          />
          <h6>Upload Image</h6>
        </label>
        <div className="row">
          <div className="col-6 aline">
            {image.length > 0 ? (
              <img
                src={image[0]}
                alt="Upload Profile pic"
                className="subParaImg"
              />
            ) : null}
          </div>
          <div className="col-6 aline">
            {image.length > 1 ? (
              <img
                src={image[1]}
                alt="Upload Profile pic"
                className="subParaImg"
              />
            ) : null}
          </div>
          <div className="col-6 aline">
            {image.length > 2 ? (
              <img
                src={image[2]}
                alt="Upload Profile pic"
                className="subParaImg"
              />
            ) : null}
          </div>
          <div className="col-6 aline">
            {image.length > 3 ? (
              <img
                src={image[3]}
                alt="Upload Profile pic"
                className="subParaImg"
              />
            ) : null}
          </div>
        </div>
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
