import * as ActionTypes from "./actionTypes";

export const addQuestion = (question) => {
  return {
    type: ActionTypes.ADD_QUESTION,
    question: question,
  };
};

export const addAnswer0 = (answer) => {
  return {
    type: ActionTypes.ADD_COR_ANS,
    answer: answer,
  };
};

export const addAnswer1 = (answer) => {
  return {
    type: ActionTypes.ADD_WRG_ANS1,
    answer: answer,
  };
};

export const addAnswer2 = (answer) => {
  return {
    type: ActionTypes.ADD_WRG_ANS2,
    answer: answer,
  };
};

export const addAnswer3 = (answer) => {
  return {
    type: ActionTypes.ADD_WRG_ANS3,
    answer: answer,
  };
};

export const addAnswer4 = (answer) => {
  return {
    type: ActionTypes.ADD_WRG_ANS4,
    answer: answer,
  };
};

export const addQuestionImg = (imgUpload,imgPre) => {
  return {
    type: ActionTypes.ADD_QUESTION_IMG,
    imgUpload: imgUpload,
    imgPre: imgPre,
  };
};

export const removeQueImg = (index)=>{
   return{
      type:ActionTypes.REMOVE_QUE_IMG,
      index:index
   }
}
