const initialState = {
    blogs: {}
  };
  
  export const blogs = (state = initialState, action) => {
    switch (action.type) {
      case 'blogs': {
        // console.log(action.payload)
        return { ...state,blogs:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default blogs;