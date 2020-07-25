const initialState = {
    addAdvertisement: {}
  };
  
  export const addAdvertisement = (state = initialState, action) => {
    switch (action.type) {
      case 'addAdvertisement': {
        // console.log(action.payload)
        return { ...state,addAdvertisement:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addAdvertisement;