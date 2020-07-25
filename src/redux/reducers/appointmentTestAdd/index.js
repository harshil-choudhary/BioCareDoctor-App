const initialState = {
    appointmentTestAdd: {}
  };
  
  export const appointmentTestAdd = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentTestAdd': {
        // console.log(action.payload)
        return { ...state,appointmentTestAdd:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentTestAdd;