const initialState = {
    appointmentPastHistory: {}
  };
  
  export const appointmentPastHistory = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentPastHistory': {
        // console.log(action.payload)
        return { ...state,appointmentPastHistory:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentPastHistory;