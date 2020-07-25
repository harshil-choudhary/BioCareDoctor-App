const initialState = {
    addHospital: {}
  };
  
  export const addHospital = (state = initialState, action) => {
    switch (action.type) {
      case 'addHospital': {
        // console.log(action.payload)
        return { ...state,addHospital:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addHospital;