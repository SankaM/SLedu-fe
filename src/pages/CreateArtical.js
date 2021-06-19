import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Layout from "../components/Layout";
import LeftPara from "../components/LeftPara";
import RightPara from "../components/RightPara";
import Para from "../components/Para";
import PreviewArtical from "../components/PreviewArtical";
import * as articalAction from "../store/actions/actionIndex";
import { useDispatch, useSelector } from "react-redux";

// text editor libraies
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Style/ArticalPage.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from 'react-html-parser';

const CreateArtical = () => {
  const [mainImgs, setMainImgs] = useState([]);
  const [previewImgUrl, setPreviewImgUrl] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [context, setContext] = useState([]);
  const [showPrevArtical, setShowPrevArtical] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();
  const articalContext = useSelector(state=> state.ar.articalContext)

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(articalAction.addMainPara(paraHtmlFormat));
  };
  const proImgHandlaer = ({ target: { files } }) => {
    let myImages = Array.from(files);
    let mainImgList = [...mainImgs];
    let previewImgUrlList = [...previewImgUrl];


    const promice = myImages.map((file) => {
      let reader = new FileReader();
      reader.onload = () => {
        mainImgList = [...mainImgList, file];
        previewImgUrlList = [...previewImgUrlList, reader.result];
        setMainImgs(mainImgList);
        setPreviewImgUrl(previewImgUrlList);
        dispatch(articalAction.addMainParaImg(mainImgList, previewImgUrlList));
      };
      reader.readAsDataURL(file);
    });
  };
  const closeBtnHandler = (index) => {
    console.log(index);
    let mainImgList = mainImgs;
    let previewImgUrlList = previewImgUrl;
    var promis = [];
    promis.push(mainImgList.splice(index, 1));
    promis.push(previewImgUrlList.splice(index, 1));
    Promise.all(promis).then(async () => {
      setMainImgs([...mainImgList]);
      setPreviewImgUrl([...previewImgUrlList]);
      console.log(previewImgUrlList);
    });
  };
  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAddClose = () => {
    setAnchorEl(null);
  };
  const addLeftPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <LeftPara paraNo={context.length + 1}/>];
    dispatch(articalAction.addLeftPara());
    setContext(articalContext);
  };
  const addRightPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <RightPara paraNo={context.length + 1}/>];
    dispatch(articalAction.addRightPara());
    setContext(articalContext);
  };
  const addPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <Para />];
    setContext(articalContext);
    dispatch(articalAction.addNormalPara());
  };
  const closePrevArti=()=>{
    setShowPrevArtical(false)
  }
  return (
    <Layout>
      <div className="container createArtical-backgraund">
        <h2>Create Artical</h2>
        <form>
          <div className="row">
            <label className="ImgUploadBtnMain">
              Upload Images
              <input
                type="file"
                multiple
                name="browsArticalMainImg1"
                className="d-none"
                onChange={proImgHandlaer}
              />
            </label>
          </div>
          <div className="row">
            {previewImgUrl.length !== 0 &&
              previewImgUrl.map((url, index) => (
                <div className="col-3 articalMainImageSec" key={index}>
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
          <div class="form-group text-areaBackGraund">
            <label for="exampleFormControlTextarea1">Main Part</label>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <div className="articalContext">{context}</div>
          <div className="AddParaBtnSec">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddClick}
            >
              Add New Paragraph
            </Button>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleAddClose}
          >
            <MenuItem onClick={addPara}>Paragraph without multimedia</MenuItem>
            <MenuItem onClick={addRightPara}>
              Paragraph (Images - right side)
            </MenuItem>
            <MenuItem onClick={addLeftPara}>
              Paragraph (Images - left side)
            </MenuItem>
          </Menu>
        </form>
        <button type="button" onClick={()=>setShowPrevArtical(true)}>Preview</button>
      </div>
      <PreviewArtical show={showPrevArtical} closePrevArti={closePrevArti}/>
    </Layout>
  );
};
export default CreateArtical;
