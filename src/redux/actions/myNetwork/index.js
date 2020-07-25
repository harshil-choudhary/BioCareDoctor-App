import axios from 'axios';
export const myNetwork = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/my_network?token="+id)
      .then((response) => {
        dispatch({
          type: 'MYNETWORK',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};