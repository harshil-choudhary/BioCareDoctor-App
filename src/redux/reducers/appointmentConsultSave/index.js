const initialState = {
    appointmentConsultSave: {}
  };
  
  export const appointmentConsultSave = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentConsultSave': {
        // console.log(action.payload)
        return { ...state,appointmentConsultSave:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentConsultSave;