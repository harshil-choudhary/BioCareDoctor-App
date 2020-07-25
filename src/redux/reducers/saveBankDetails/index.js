const initialState = {
    saveBankDetails: {}
  };
  
  export const saveBankDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'saveBankDetails': {
        // console.log(action.payload)
        return { ...state,saveBankDetails:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveBankDetails;