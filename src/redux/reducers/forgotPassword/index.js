const initialState = {
    forgotPassword: {}
  };
  
  export const forgotPassword = (state = initialState, action) => {
    switch (action.type) {
      case 'forgotPassword': {
        // console.log(action.payload)
        return { ...state,forgotPassword:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default forgotPassword;