const initialState = {
    appointmentReports: {}
  };
  
  export const appointmentReports = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentReports': {
        // console.log(action.payload)
        return { ...state,appointmentReports:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentReports;