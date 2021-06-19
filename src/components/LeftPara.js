import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Style/ArticalPage.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from 'react-html-parser';
import "../Style/ArticalPage.css";
import { useDispatch, useSelector } from "react-redux";
import * as articalAction from "../store/actions/actionIndex";

const LeftPara = (props) => {
  const [image, setImage] = useState([]);
  const [prevImage, setPrevImage] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(articalAction.addParaText(paraHtmlFormat,props.paraNo));
  };

  const imgHandlaer = ({ target: { files } }) => {
    let myImages = Array.from(files);
    let mainImgList = [...image];
    let previewImgUrlList = [...prevImage];

    myImages.forEach((file) => {
      let reader = new FileReader();
      reader.onload = () => {
        mainImgList = [...mainImgList, file];
        previewImgUrlList = [...previewImgUrlList, reader.result];
        setImage(mainImgList);
        setPrevImage(previewImgUrlList);
        dispatch(articalAction.addSubParaImg(mainImgList, previewImgUrlList ,props.paraNo ));
      };
      reader.readAsDataURL(file);
    });
  };
  const closeBtnHandler = (index) => {
    let mainImgList = image;
    let previewImgUrlList = prevImage;
    var promis = [];
    promis.push(mainImgList.splice(index, 1));
    promis.push(previewImgUrlList.splice(index, 1));
    Promise.all(promis).then(async () => {
      setImage([...mainImgList]);
      setPrevImage([...previewImgUrlList]);
    });
  };

  return (
    <div className="row">
      <div className="col-8">
        <div class="form-group text-areaBackGraund">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>
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
          {prevImage.length !== 0 &&
            prevImage.map((url, index) => (
              <div className="articalSubImageSec" key={index}>
                <div className="ImgUploadBtn">
                  <div className="imgWraper">
                    <img
                      src={url}
                      alt="Upload pic"
                      className="articalMainImage"
                    />
                    <button
                      type="button"
                      className="imgCloseBtn"
                      name="removeMain1"
                      onClick={() => closeBtnHandler(index)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default LeftPara;
