const initialState = {
    patientReport: {}
  };
  
  export const patientReports = (state = initialState, action) => {
    switch (action.type) {
      case 'PATIENTREPORTS': {
        // console.log(action.payload)
        return { ...state,patientReport:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default patientReports;