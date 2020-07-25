const initialState = {
    searchNetwork: {}
  };
  
  export const searchNetwork = (state = initialState, action) => {
    switch (action.type) {
      case 'searchNetwork': {
        // console.log(action.payload)
        return { ...state,searchNetwork:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default searchNetwork;