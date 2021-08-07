import React from 'react';
import {Modal} from 'react-bootstrap';
// import '../Style/Note.css';

const VideoModel=(props)=>{
    return(<Modal
                size="lg"
                show={props.Show}
            >
        <Modal.Body>
        <div id="vidSec">
            <iframe width="100%" height="415" src={"https://www.youtube.com/embed/"+props.VidId} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" title="lesson Video" allowfullscreen>
            </iframe>
            <a href="#/" id="vidBtn" onClick={()=>props.VidClose()}>Back</a>
        </div>
           
        </Modal.Body>
      </Modal>
      )
}
export default VideoModel;