import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const login = (data) => {
  return async (dispatch, getState) => { 
    await axios
      .post("http://backend.bionische.com/api/doctors/login?email="+data.email+"&password="+data.password)
      .then((response) => {
        console.log(response.data)
        AsyncStorage.setItem('token', response.data.access_token)
        dispatch({
          type: 'LOGIN',
          payload: response.data.access_token,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}; 