import axios from 'axios';
export const profile = (id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/doctors/profile?token="+id;
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'PROFILE',
          payload: response.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};