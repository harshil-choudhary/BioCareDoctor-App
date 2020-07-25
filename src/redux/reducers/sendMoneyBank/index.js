const initialState = {
    sendMoneyBank: {}
  };
  
  export const sendMoneyBank = (state = initialState, action) => {
    switch (action.type) {
      case 'sendMoneyBank': {
        // console.log(action.payload)
        return { ...state,sendMoneyBank:action.payload };
      }
      default: {
        return sendMoneyBank;
      }
    }
  };
  export default sendMoneyBank;