const initialState = {
    walletTransactions: {}
  };
  
  export const walletTransactions = (state = initialState, action) => {
    switch (action.type) {
      case 'walletTransactions': {
        // console.log(action.payload)
        return { ...state,walletTransactions:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default walletTransactions;