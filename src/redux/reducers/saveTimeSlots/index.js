const initialState = {
    saveTimeSlots: {}
  };
  
  export const saveTimeSlots = (state = initialState, action) => {
    switch (action.type) {
      case 'saveTimeSlots': {
        // console.log(action.payload)
        return { ...state,saveTimeSlots:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveTimeSlots;