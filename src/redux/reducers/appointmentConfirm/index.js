const initialState = {
    appointmentConfirm: {}
  };
  
  export const appointmentConfirm = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentConfirm': {
        // console.log(action.payload)
        return { ...state,appointmentConfirm:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentConfirm;