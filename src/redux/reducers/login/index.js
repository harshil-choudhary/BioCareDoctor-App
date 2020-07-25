const initialState = {
    login: {},
    
  };
  
  export const login = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN': {
        // console.log(action.payload)
        return { ...state,login:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default login;