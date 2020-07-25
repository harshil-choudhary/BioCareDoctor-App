const initialState = {
    appointmentSearch: {}
  };
  
  export const appointmentSearch = (state = initialState, action) => {
    switch (action.type) {
      case 'appointmentSearch': {
        // console.log(action.payload)
        return { ...state,appointmentSearch:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default appointmentSearch;