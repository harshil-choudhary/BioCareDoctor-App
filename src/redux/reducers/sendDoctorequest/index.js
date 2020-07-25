const initialState = {
    sendDoctorequest: {}
  };
  
  export const sendDoctorequest = (state = initialState, action) => {
    switch (action.type) {
      case 'sendDoctorequest': {
        // console.log(action.payload)
        return { ...state,sendDoctorequest:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default sendDoctorequest;