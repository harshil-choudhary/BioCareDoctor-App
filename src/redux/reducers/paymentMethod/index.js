const initialState = {
    paymentMethod: {}
  };
  
  export const paymentMethod = (state = initialState, action) => {
    switch (action.type) {
      case 'paymentMethod': {
        // console.log(action.payload)
        return { ...state,paymentMethod:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default paymentMethod;