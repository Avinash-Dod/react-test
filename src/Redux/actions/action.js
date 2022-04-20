import axios from "axios";
import { FETCH_DATA, SIGN_IN, SIGN_UP } from "../constants";
 
var config = {
  method: 'get',
  url: 'https://reqres.in/api/users/',
  headers: { }
};


export const fetchData = () => {

  return (dispatch) => {
      return axios(config)
          .then(response => response.data)
          .then(response => dispatch(
              { type: FETCH_DATA, payload:response}))
          .catch(err => dispatch(
              console.log(err)))
  }

}