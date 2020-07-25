const initialState = {
    myNetwork: {}
  };
  
  export const myNetwork = (state = initialState, action) => {
    switch (action.type) {
      case 'myNetwork': {
        // console.log(action.payload)
        return { ...state,myNetwork:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default myNetwork;