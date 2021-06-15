import React from 'react';
import {Modal} from 'react-bootstrap'
import Artical from '../pages/Artical';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";

const PreviewArtical=(props)=>{
    const articalContext = useSelector(state=> state.ar.articalContext)

    return(
        <>
        <Modal
        size="lg"
        show={props.show}
        onHide={() =>props.closePrevArti()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Artical articalContext={articalContext}/>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default PreviewArtical;
