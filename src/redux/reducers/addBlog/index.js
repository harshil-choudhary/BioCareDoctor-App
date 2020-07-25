const initialState = {
    addBlog: {}
  };
  
  export const addBlog = (state = initialState, action) => {
    switch (action.type) {
      case 'addBlog': {
        // console.log(action.payload)
        return { ...state,addBlog:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addBlog;