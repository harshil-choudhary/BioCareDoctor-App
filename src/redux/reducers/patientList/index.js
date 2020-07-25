const initialState = {
    patientList: {}
  };
  
  export const patientList = (state = initialState, action) => {
    switch (action.type) {
      case 'patientList': {
        // console.log(action.payload)
        return { ...state,patientList:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default patientList;