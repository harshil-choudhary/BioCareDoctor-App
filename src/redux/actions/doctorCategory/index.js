import axios from 'axios';
export const doctorCategory = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/doctors/all-categories")
      .then((response) => {
        // console.log(response);
        dispatch({
          type: 'DOCTORCATEGORY',
          payload: response.data.data,
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};