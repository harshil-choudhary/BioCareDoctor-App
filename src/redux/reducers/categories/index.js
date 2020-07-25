const initialState = {
    categories: {}
  };
  
  export const categories = (state = initialState, action) => {
    switch (action.type) {
      case 'categories': {
        // console.log(action.payload)
        return { ...state,categories:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default categories;