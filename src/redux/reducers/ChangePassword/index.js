const initialState = {
    ChangePassword: {}
  };
  
  export const ChangePassword = (state = initialState, action) => {
    switch (action.type) {
      case 'ChangePassword': {
        // console.log(action.payload)
        return { ...state,ChangePassword:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default ChangePassword;