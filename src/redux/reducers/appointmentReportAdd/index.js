const initialState = {
    appointmentReportAdd: {}
  };
  
  export const appointmentReportAdd = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentReportAdd': {
        // console.log(action.payload)
        return { ...state,appointmentReportAdd:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentReportAdd;