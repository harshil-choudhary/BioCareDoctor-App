const initialState = {
    doctorCategory: {}
  };
  
  export const doctorCategory = (state = initialState, action) => {
    switch (action.type) {
      case 'DOCTORCATEGORY': {
        // console.log(action.payload)
        return { ...state,doctorCategory:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default doctorCategory;