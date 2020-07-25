const initialState = {
    appointmentMedicine: {}
  };
  
  export const appointmentMedicine = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentMedicine': {
        // console.log(action.payload)
        return { ...state,appointmentMedicine:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentMedicine;