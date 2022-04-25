import axios from "axios";
import { CHANGE_DATA, DELETE, FETCH_DATA, LOGOUT } from "../constants";
export const fetchData = () => {
  return async (dispatch) => {
    var get = {
      method: 'get',
      url: 'https://reqres.in/api/users/',
      headers: {}
    };
    try {
      const response = await axios(get);
      const response_1 = response.data;
      return dispatch(
        { type: FETCH_DATA, payload: response_1 });
    } catch (err) {
      console.log(err);
    }
  }
}
export const pageContent = (data) => {
  return {
    type: CHANGE_DATA,
    data: data
  }
}
export const Del = (data) => {
  let items= data
  console.log(items);
  // return{
  //   type:DELETE,
  //   data
  // }
}
// export async function Del(dispatch, getState) {
//   const response = await client.get('/fakeApi/todos')
//   dispatch({ type: 'todos/todosLoaded', payload: response.todos })
// }
export const logout = () => {
  return {
    type: LOGOUT
  }

}

