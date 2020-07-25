const initialState = {
    example: {}
  };
  
  export const example = (state = initialState, action) => {
    switch (action.type) {
      case 'example': {
        // console.log(action.payload)
        return { ...state,example:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default example;