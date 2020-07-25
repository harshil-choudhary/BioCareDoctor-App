const initialState = {
    advertisements: {}
  };
  
  export const advertisements = (state = initialState, action) => {
    switch (action.type) {
      case 'advertisements': {
        // console.log(action.payload)
        return { ...state,advertisements:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default advertisements;