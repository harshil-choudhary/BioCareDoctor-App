const initialState = {
    hospitals: {}
  };
  
  export const hospitals = (state = initialState, action) => {
    switch (action.type) {
      case 'hospitals': {
        // console.log(action.payload)
        return { ...state,hospitals:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default hospitals;