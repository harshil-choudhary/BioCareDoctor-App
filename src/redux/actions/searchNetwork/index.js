import axios from 'axios';
export const searchNetwork = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/search_network?token="+id)
      .then((response) => {
        dispatch({
          type: 'SEARCHNETWORK',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};