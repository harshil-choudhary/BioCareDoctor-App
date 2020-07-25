const initialState = {
    invoiceList: {}
  };
  
  export const invoiceList = (state = initialState, action) => {
    switch (action.type) {
      case 'invoiceList': {
        // console.log(action.payload)
        return { ...state,invoiceList:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default invoiceList;