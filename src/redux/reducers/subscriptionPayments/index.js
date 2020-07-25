const initialState = {
    example: {}
  };
  
  export const bank = (state = initialState, action) => {
    switch (action.type) {
      case 'EXAMPLE': {
        // console.log(action.payload)
        return { ...state,example:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default bank;