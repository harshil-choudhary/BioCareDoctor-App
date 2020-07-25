import axios from 'axios';
export const invoiceDetails = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/invoice_list?token="+id)
      .then((response) => {
        dispatch({
          type: 'INVOICEDETAILS',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};