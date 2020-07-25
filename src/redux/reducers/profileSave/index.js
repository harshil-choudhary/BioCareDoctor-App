const initialState = {
    profileSave: {}
  };
  
  export const profileSave = (state = initialState, action) => {
    switch (action.type) {
      case 'profileSave': {
        // console.log(action.payload)
        return { ...state,profileSave:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default profileSave;