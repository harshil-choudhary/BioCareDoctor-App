const initialState = {
    appointmentTest: {}
  };
  
  export const appointmentTest = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentTest': {
        // console.log(action.payload)
        return { ...state,appointmentTest:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentTest;