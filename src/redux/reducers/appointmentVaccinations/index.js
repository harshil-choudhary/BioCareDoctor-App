const initialState = {
    appointmentVaccinations: {}
  };
  
  export const appointmentVaccinations = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentVaccinations': {
        // console.log(action.payload)
        return { ...state,appointmentVaccinations:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentVaccinations;