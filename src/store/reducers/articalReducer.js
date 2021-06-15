import * as actionTypes from "../actions/actionTypes";
import { EditorState, convertToRaw } from "draft-js";

const initialState = {
  articalContext: [
    {
      part:1,
      type: "main",
      imgListForUpoad: [],
      images: [],
      text: EditorState.createEmpty(),
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NORMAL_PARA: {
      return {
        ...state,
        articalContext: action.para,
      };
    }
    case actionTypes.ADD_MAIN_PARA: {
      let articalContext = state.articalContext;
      articalContext[0].text = action.para;
      return {
        ...state,
        articalContext: articalContext,
      };
    }
    case actionTypes.ADD_MAIN_IMG: {
      let articalContext = state.articalContext;
      articalContext[0].imgListForUpoad = action.imgUpload;
      articalContext[0].images = action.imgPre;
      return {
        ...state,
        articalContext: articalContext,
      };
    }
    default:
      return state;
  }
};
export default reducer;
