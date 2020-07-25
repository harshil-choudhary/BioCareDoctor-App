const initialState = {
    appointmentPayments: {}
  };
  
  export const appointmentPayments = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentPayments': {
        // console.log(action.payload)
        return { ...state,appointmentPayments:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentPayments;