const initialState = {
    getTimeSlots: {}
  };
  
  export const getTimeSlots = (state = initialState, action) => {
    switch (action.type) {
      case 'getTimeSlots': {
        // console.log(action.payload)
        return { ...state,getTimeSlots:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default getTimeSlots;