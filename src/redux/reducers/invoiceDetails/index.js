const initialState = {
    invoiceDetails: {}
  };
  
  export const invoiceDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'invoiceDetails': {
        // console.log(action.payload)
        return { ...state,invoiceDetails:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default invoiceDetails;