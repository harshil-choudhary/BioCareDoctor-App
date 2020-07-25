const initialState = {
    saveLeaves: {}
  };
  
  export const saveLeaves = (state = initialState, action) => {
    switch (action.type) {
      case 'saveLeaves': {
        // console.log(action.payload)
        return { ...state,saveLeaves:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveLeaves;