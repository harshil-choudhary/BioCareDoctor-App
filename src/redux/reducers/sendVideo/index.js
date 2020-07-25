const initialState = {
    sendVideo: {}
  };
  
  export const sendVideo = (state = initialState, action) => {
    switch (action.type) {
      case 'sendVideo': {
        // console.log(action.payload)
        return { ...state,sendVideo:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default sendVideo;