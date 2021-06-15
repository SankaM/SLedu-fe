import  * as ActionTypes from './actionTypes';

export const  addNormalPara=()=>{
    return{
        type:ActionTypes.ADD_NORMAL_PARA ,
        para:"lakmal"
    }
}

export const addMainPara=(para)=>{
   return{
    type:ActionTypes.ADD_MAIN_PARA,
    para:para
   }
}

export const addMainParaImg=(imgUpload,imgPre)=>{
   return{
    type:ActionTypes.ADD_MAIN_IMG,
    imgUpload:imgUpload,
    imgPre:imgPre
   }
}