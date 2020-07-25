const initialState = {
    addClinic: {}
  };
  
  export const addClinic = (state = initialState, action) => {
    switch (action.type) {
      case 'addClinic': {
        // console.log(action.payload)
        return { ...state,addClinic:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addClinic;