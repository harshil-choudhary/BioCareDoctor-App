const initialState = {
    appointmentCancel: {}
  };
  
  export const appointmentCancel = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentCancel': {
        // console.log(action.payload)
        return { ...state,appointmentCancel:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentCancel;