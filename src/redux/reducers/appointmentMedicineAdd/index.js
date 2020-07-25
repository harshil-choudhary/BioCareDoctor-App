const initialState = {
    appointmentMedicineAdd: {}
  };
  
  export const appointmentMedicineAdd = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentMedicineAdd': {
        // console.log(action.payload)
        return { ...state,appointmentMedicineAdd:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentMedicineAdd;