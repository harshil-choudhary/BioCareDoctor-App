const initialState = {
    reports: {}
  };
  
  export const reports = (state = initialState, action) => {
    switch (action.type) {
      case 'REPORTS': {
        // console.log(action.payload)
        return { ...state,reports:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default reports;