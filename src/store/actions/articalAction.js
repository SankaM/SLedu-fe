import  * as ActionTypes from './actionTypes';

export const addMainPara=(para)=>{
   return{
    type:ActionTypes.ADD_MAIN_PARA,
    para:para
   }
}

export const addParaText=(para,paraNo)=>{
   return{
    type:ActionTypes.ADD_PARA_TEXT,
    para:para,
    paraNo:paraNo
   }
}

export const addLeftPara=()=>{
   return{
    type:ActionTypes.ADD_LEFT_PARA,
   }
}

export const addRightPara=()=>{
   return{
    type:ActionTypes.ADD_RIGHT_PARA,
   }
}

export const addNormalPara=()=>{
   return{
    type:ActionTypes.ADD_NORMAL_PARA,
   }
}

export const removePara=(index)=>{
   return{
    type:ActionTypes.REMOVE_PARA,
    index:index
   }
}

export const addMainParaImg=(imgUpload,imgPre)=>{
   return{
    type:ActionTypes.ADD_MAIN_IMG,
    imgUpload:imgUpload,
    imgPre:imgPre
   }
}

export const addSubParaImg=(imgUpload,imgPre,paraNo)=>{
   return{
    type:ActionTypes.ADD_SUB_IMG,
    imgUpload:imgUpload,
    imgPre:imgPre,
    paraNo:paraNo
   }
}