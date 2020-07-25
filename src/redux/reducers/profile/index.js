const initialState = {
    profile: {}
  };
  
  export const profile = (state = initialState, action) => {
    switch (action.type) {
      case 'PROFILE': {
        // console.log(action.payload)
        return { ...state,profile:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default profile;