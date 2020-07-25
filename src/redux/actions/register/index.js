import axios from 'axios';
export const register = (id) => {
  return async (dispatch, getState) => {
    await axios
      .post("http://backend.bionische.com/api/doctors/register")
      .then((response) => {
        dispatch({
          type: 'REGISTER',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};