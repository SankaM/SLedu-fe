import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../Style/ArticalPage.css";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import * as articalAction from "../store/actions/actionIndex";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Para = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    let paraHtmlFormat = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(articalAction.addParaText(paraHtmlFormat, props.paraNo));
  };


  return (
    <div className="row createArtical-backgraund">
      <div className="removeButton">
        <IconButton
          aria-label="delete"
          style={{
            border: "none",
            outline: "none",
          }}
          onClick={()=>props.removePara(props.paraNo)}
        >
          <CloseIcon />
        </IconButton>{" "}
      </div>
      <div className="col-12">
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
  );
};
export default Para;
