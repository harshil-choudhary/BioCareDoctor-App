const initialState = {
    appointmentConsultHistory: {}
  };
  
  export const appointmentConsultHistory = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentConsultHistory': {
        // console.log(action.payload)
        return { ...state,appointmentConsultHistory:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentConsultHistory;