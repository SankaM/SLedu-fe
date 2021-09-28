import * as actionTypes from "../actions/actionTypes";
import { EditorState, convertToRaw } from "draft-js";

const initialState = {
  imgListForUpoad: [],
  images: [],
  question: EditorState.createEmpty(),
  corrAnswer: EditorState.createEmpty(),
  wroAnswer1: EditorState.createEmpty(),
  wroAnswer2: EditorState.createEmpty(),
  wroAnswer3: EditorState.createEmpty(),
  wroAnswer4: EditorState.createEmpty(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION: {
      return {
        ...state,
        question: action.question,
      };
    }
    case actionTypes.ADD_COR_ANS: {
      return {
        ...state,
        corrAnswer: action.answer,
      };
    }
    case actionTypes.ADD_WRG_ANS1: {
      return {
        ...state,
        wroAnswer1: action.answer,
      };
    }
    case actionTypes.ADD_WRG_ANS2: {
      return {
        ...state,
        wroAnswer2: action.answer,
      };
    }
    case actionTypes.ADD_WRG_ANS3: {
      return {
        ...state,
        wroAnswer3: action.answer,
      };
    }
    case actionTypes.ADD_WRG_ANS4: {
      return {
        ...state,
        wroAnswer4: action.answer,
      };
    }
    case actionTypes.ADD_QUESTION_IMG: {
      return {
        ...state,
        imgListForUpoad: action.imgUpload,
        images: action.imgPre,
      };
    }
   case actionTypes.REMOVE_QUE_IMG:{
     let imgListForUpoad = state.imgListForUpoad;
     let images = state.images;
     return{
       ...state,
       imgListForUpoad:imgListForUpoad.splice(action.index),
       images:images.splice(action.index)
     }
   }
    default:
      return state;
  }
};
export default reducer;
