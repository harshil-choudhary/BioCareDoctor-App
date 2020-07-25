const initialState = {
    bankDetails: {}
  };
  
  export const bankDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'bankDetails': {
        // console.log(action.payload)
        return { ...state,bankDetails:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default bankDetails;