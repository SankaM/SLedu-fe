import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Layout from "../components/Layout";
import LeftPara from "../components/LeftPara"
import RightPara from "../components/RightPara"
import Para from "../components/Para";
import * as articalAction from '../store/actions/actionIndex'
import {useDispatch,useSelector} from 'react-redux'

const CreateArtical = () => {
  const [mainImgs, setMainImgs] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [context, setContext] = useState([]);

  const dispatch = useDispatch()

  const proImgHandlaer = (event) => {
    const ObjectUrl = URL.createObjectURL(event.target.files[0]);
    setMainImgs([ObjectUrl]);
  };
  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAddClose = () => {
    setAnchorEl(null);
  };
  const addLeftPara = () => {
    setAnchorEl(null);
    let articalContext = [...context,<LeftPara/>];
    setContext(articalContext)
  };
  const addRightPara = () => {
    setAnchorEl(null);
    let articalContext = [...context,<RightPara/>];
    setContext(articalContext)
  };
  const addPara = () => {
    setAnchorEl(null);
    let articalContext = [...context,<Para/>];
    setContext(articalContext)
    dispatch(articalAction.addNormalPara())
  };
  return (
    <Layout>
      <div className="container">
        <h2>Create Artical</h2>
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Main Part</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-4 proImgSec">
              <label className="ImgUpBtn">
                <img
                  src={mainImgs[0]}
                  alt="Upload Profile pic"
                  className="profImg"
                />
                <input
                  type="file"
                  id="browsArticalMainImg1"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
                <h3 className="proImgHader">Add profile Image</h3>
              </label>
            </div>
            <div className="col-4 proImgSec">
              <label className="ImgUpBtn">
                <img
                  src={mainImgs[0]}
                  alt="Upload Profile pic"
                  className="profImg"
                />
                <input
                  type="file"
                  id="browsArticalMainImg1"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
                <h3 className="proImgHader">Add profile Image</h3>
              </label>
            </div>
            <div className="col-4 proImgSec">
              <label className="ImgUpBtn">
                <img
                  src={mainImgs[0]}
                  alt="Upload Profile pic"
                  className="profImg"
                />
                <input
                  type="file"
                  id="browsArticalMainImg1"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
                <h3 className="proImgHader">Add profile Image</h3>
              </label>
            </div>
          </div>
          <div className="articalContext">
            {context}
          </div>
          <Button onClick={handleAddClick}>Add New Paragraph</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleAddClose}
          >
            <MenuItem onClick={addPara}>
              Paragraph without multimedia
            </MenuItem>
            <MenuItem onClick={addRightPara}>
              Paragraph With multimedia(Right side)
            </MenuItem>
            <MenuItem onClick={addLeftPara}>
              Paragraph With multimedia(Left side)
            </MenuItem>
          </Menu>
        </form>
      </div>
    </Layout>
  );
};
export default CreateArtical;
