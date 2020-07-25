const initialState = {
    paymentReceipts: {}
  };
  
  export const paymentReceipts = (state = initialState, action) => {
    switch (action.type) {
      case 'paymentReceipts': {
        // console.log(action.payload)
        return { ...state,paymentReceipts:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default paymentReceipts;