import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Layout from "../components/Layout";
import LeftPara from "../components/LeftPara";
import RightPara from "../components/RightPara";
import Para from "../components/Para";
import UploadImage from "../CoverImgs/UploadImage.png";
import * as articalAction from "../store/actions/actionIndex";
import { useDispatch, useSelector } from "react-redux";

const CreateArtical = () => {
  const [mainImg1, setMainImg1] = useState(UploadImage);
  const [mainImg2, setMainImg2] = useState(UploadImage);
  const [mainImg3, setMainImg3] = useState(UploadImage);
  const [mainImg4, setMainImg4] = useState(UploadImage);
  const [anchorEl, setAnchorEl] = useState(null);
  const [context, setContext] = useState([]);

  const dispatch = useDispatch();

  const proImgHandlaer = (event) => {
    const fildId = event.target.name;
    console.log(fildId);
    switch (fildId) {
      case "browsArticalMainImg1":
        {
          const ObjectUrl = URL.createObjectURL(event.target.files[0]);
          setMainImg1(ObjectUrl);
        }
        break;
      case "browsArticalMainImg2":
        {
          const ObjectUrl = URL.createObjectURL(event.target.files[0]);
          setMainImg2(ObjectUrl);
        }
        break;
      case "browsArticalMainImg3":
        {
          const ObjectUrl = URL.createObjectURL(event.target.files[0]);
          setMainImg3(ObjectUrl);
        }
        break;
      case "browsArticalMainImg4":
        {
          const ObjectUrl = URL.createObjectURL(event.target.files[0]);
          setMainImg4(ObjectUrl);
        }
        break;
      default: {
        break;
      }
    }
  };
  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAddClose = () => {
    setAnchorEl(null);
  };
  const addLeftPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <LeftPara />];
    setContext(articalContext);
  };
  const addRightPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <RightPara />];
    setContext(articalContext);
  };
  const addPara = () => {
    setAnchorEl(null);
    let articalContext = [...context, <Para />];
    setContext(articalContext);
    dispatch(articalAction.addNormalPara());
  };
  return (
    <Layout>
      <div className="container">
        <h2>Create Artical</h2>
        <form>
          <div className="row">
            <div className="col-3 articalMainImageSec">
              <label className="ImgUploadBtn">
                <img
                  src={mainImg1}
                  alt="Upload pic"
                  className="articalMainImage"
                />
                <input
                  type="file"
                  name="browsArticalMainImg1"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
              </label>
            </div>
            <div className="col-3 articalMainImageSec">
              <label className="ImgUploadBtn">
                <img
                  src={mainImg2}
                  alt="Upload pic"
                  className="articalMainImage"
                />
                <input
                  type="file"
                  name="browsArticalMainImg2"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
              </label>
            </div>
            <div className="col-3 articalMainImageSec">
              <label className="ImgUploadBtn">
                <img
                  src={mainImg3}
                  alt="Upload pic"
                  className="articalMainImage"
                />
                <input
                  type="file"
                  name="browsArticalMainImg3"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
              </label>
            </div>
            <div className="col-3 articalMainImageSec">
              <label className="ImgUploadBtn">
                <img
                  src={mainImg4}
                  alt="Upload pic"
                  className="articalMainImage"
                />
                <input
                  type="file"
                  name="browsArticalMainImg4"
                  className="d-none"
                  onChange={proImgHandlaer}
                />
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Main Part</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
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
