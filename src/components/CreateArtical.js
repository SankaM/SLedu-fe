import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Layout from "./Layout";
import LeftPara from "./LeftPara";
import RightPara from "./RightPara";
import Para from "./Para";
import ParaControllor from "./ParaController";
import PreviewArtical from "./PreviewArtical";
import * as articalAction from "../store/actions/actionIndex";
import { useDispatch, useSelector } from "react-redux";

// text editor libraies
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../Style/ArticalPage.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const CreateArtical = () => {
  const [mainImgs, setMainImgs] = useState([]);
  const [previewImgUrl, setPreviewImgUrl] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [context, setContext] = useState([]);
  const [showPrevArtical, setShowPrevArtical] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();
  const articalContext = useSelector((state) => state.ar.articalContext)

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
    // let articalContext = [...context, <LeftPara paraNo={context.length + 1} removePara={removePara} key={context.length + 1}/>];
    // let articalContext = context;
    // let para = {
    //   type:"left",
    //   paraNo:context.length + 1
    // }
    // articalContext.push(para)
    dispatch(articalAction.addLeftPara());
    // setContext(articalContext);
    // console.log("context 1",context);
  };
  const addRightPara = () => {
    setAnchorEl(null);
    // let articalContext = useSelector((state) => state.ar.articalContext);;
    // let para = {
    //   type:"right",
    //   paraNo:context.length + 1
    // }
    // articalContext.push(para)
    dispatch(articalAction.addRightPara());
    // setContext(articalContext);
  };
  const addPara = () => {
    setAnchorEl(null);
   
    // let articalContext = [...context, <Para paraNo={context.length + 1} removePara={removePara}  key={context.length + 1}/>];
    // let articalContext = context;
    // let para = {
    //   type:"normal",
    //   paraNo:context.length + 1
    // }
    // articalContext.push(para)
    dispatch(articalAction.addNormalPara());
    // setContext(articalContext);
    // console.log("context 3",context);
  };
  const closePrevArti = () => {
    setShowPrevArtical(false);
  };
  let removePara=()=>{
    let test = context
    console.log("context",context);
  }
 
  return (
    <div>
      <div className="creArtiBtnCon">
        <button type="button" onClick={() => setShowPrevArtical(true)} className={"btn btn-primary creaArtiTopBtn"}>
          Preview
        </button>
        <Button variant="contained" color="secondary" onClick={handleAddClick} className="creaArtiTopBtn">
          Add New Paragraph
        </Button>
      </div>
      <div className="container ">
        <h2>Create Artical</h2>
          <div className="createArtical-backgraund">
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
          </div>
          {articalContext.map(x=><ParaControllor paraNo={x.part} type={x.type}/>)}
          <div className="articalContext"></div>
          <div className="AddParaBtnSec"></div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleAddClose}
          >
            <MenuItem onClick={addRightPara}>
              Paragraph (Images - right side)
            </MenuItem>
            <MenuItem onClick={addLeftPara}>
              Paragraph (Images - left side)
            </MenuItem>
            <MenuItem onClick={addPara}>Normal paragraph</MenuItem>
          </Menu>
      </div>
      <PreviewArtical show={showPrevArtical} closePrevArti={closePrevArti} />
    </div>
  );
};
export default CreateArtical;
