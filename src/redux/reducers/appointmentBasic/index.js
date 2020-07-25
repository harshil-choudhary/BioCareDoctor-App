const initialState = {
    appointmentBasic: {}
  };
  
  export const appointmentBasic = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentBasic': {
        // console.log(action.payload)
        return { ...state,appointmentBasic:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentBasic;