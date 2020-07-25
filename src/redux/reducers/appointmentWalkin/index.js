const initialState = {
    appointmentWalkin: {}
  };
  
  export const appointmentWalkin = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentWalkin': {
        // console.log(action.payload)
        return { ...state,appointmentWalkin:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentWalkin;