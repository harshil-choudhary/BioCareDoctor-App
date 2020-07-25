const initialState = {
    getLeaves: {}
  };
  
  export const getLeaves = (state = initialState, action) => {
    switch (action.type) {
      case 'getLeaves': {
        // console.log(action.payload)
        return { ...state,getLeaves:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default getLeaves;