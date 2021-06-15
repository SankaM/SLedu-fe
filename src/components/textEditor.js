import React,{useState} from "react";
import Aux from "../components/Wrap";
import { Editor } from "react-draft-wysiwyg";
import {EditorState,convertToRaw} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html" 

const TextEditor = () => {
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange=(editorState)=>{
        setEditorState(editorState)
    }
  return (
    <Aux>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <h3>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</h3>
    </Aux>
  );
};
export default TextEditor;
