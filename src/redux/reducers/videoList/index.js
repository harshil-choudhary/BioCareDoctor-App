const initialState = {
    videoList: {}
  };
  
  export const videoList = (state = initialState, action) => {
    switch (action.type) {
      case 'videoList': {
        // console.log(action.payload)
        return { ...state,videoList:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default videoList;