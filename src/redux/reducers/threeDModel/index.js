const initialState = {
    threeDModel: {}
  };
  
  export const threeDModel = (state = initialState, action) => {
    switch (action.type) {
      case 'EXAMPLE': {
        // console.log(action.payload)
        return { ...state,threeDModel:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default threeDModel;