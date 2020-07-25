import axios from 'axios';
export const patientReports = (id) => {
  console.log('check')
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/doctors/appointments/details/reports?token="+id)
      .then((response) => {
        dispatch({
          type: 'PATIENTREPORTS',
          payload: response.data.data,
          
        });

        console.log('test',response);
      })
      .catch((error) => {
        console.log('error',error);
      });
  };
};