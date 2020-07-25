import axios from 'axios';
export const reports = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/reports/2?token="+id)
      .then((response) => {
        dispatch({
          type: 'REPORTS',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};