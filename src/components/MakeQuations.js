import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import * as questionAction from "../store/actions/actionIndex";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const MakeAQuation = (props) => {
  const [image, setImage] = useState([]);
  const [prevImage, setPrevImage] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [answer0, setAnswer0] = useState(EditorState.createEmpty());
  const [answer1, setAnswer1] = useState(EditorState.createEmpty());
  const [answer2, setAnswer2] = useState(EditorState.createEmpty());
  const [answer3, setAnswer3] = useState(EditorState.createEmpty());
  const [answer4, setAnswer4] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addQuestion(paraHtmlFormat));
  };

  const onAnswer0Change = (editorState) => {
    setAnswer0(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addAnswer0(paraHtmlFormat));
  };
  const onAnswer1Change = (editorState) => {
    setAnswer1(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addAnswer1(paraHtmlFormat));
  };
  const onAnswer2Change = (editorState) => {
    setAnswer2(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addAnswer2(paraHtmlFormat));
  };
  const onAnswer3Change = (editorState) => {
    setAnswer3(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addAnswer3(paraHtmlFormat));
  };
  const onAnswer4Change = (editorState) => {
    setAnswer4(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(questionAction.addAnswer4(paraHtmlFormat));
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
        dispatch(questionAction.addQuestionImg(mainImgList, previewImgUrlList));
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
    dispatch(questionAction.removeQueImg(index));
  };

  return (
    <>
      <div className="creQ_sec">
        <div className="mRow">
          <div className="mRow">
            <div className="q_img_sec">
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
            </div>
            <div className="mRow">
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
          <div className="mRow">
            <div className="q_question_sec">
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
          </div>
          <div className="mRow">
            <div className="mRow">
              <div className="col-6">
                <div className="q_answer_Sec">
                  <label>Correct Answer</label>
                  <Editor
                    editorState={answer0}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    name="correct_Answer"
                    onEditorStateChange={onAnswer0Change}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="q_answer_Sec">
                  <label>Wrong Answer 1</label>
                  <Editor
                    editorState={answer1}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onAnswer1Change}
                  />
                </div>
              </div>
            </div>
            <div className="mRow">
              <div className="col-6">
                <div className="q_answer_Sec">
                  <label>Wrong Answer 2</label>
                  <Editor
                    editorState={answer2}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onAnswer2Change}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="q_answer_Sec">
                  <label>Wrong Answer 3</label>
                  <Editor
                    editorState={answer3}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onAnswer3Change}
                  />
                </div>
              </div>
            </div>
            <div className="mRow">
              <div className="col-6 q_answer_Sec">
                <label>Wrong Answer 4 (optional)</label>
                <Editor
                  editorState={answer4}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onAnswer4Change}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MakeAQuation;
