const initialState = {
    ratings: {}
  };
  
  export const ratings = (state = initialState, action) => {
    switch (action.type) {
      case 'ratings': {
        // console.log(action.payload)
        return { ...state,ratings:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default ratings;