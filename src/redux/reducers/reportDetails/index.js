const initialState = {
    reportDetails: {}
  };
  
  export const reportDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'reportDetails': {
        // console.log(action.payload)
        return { ...state,reportDetails:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default reportDetails;