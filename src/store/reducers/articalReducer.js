import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articalContext: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_NORMAL_PARA:
        return {
          ...state,
          articalContext:action.para
        };
        default :
        return state
    }
  };
  export default reducer;
  