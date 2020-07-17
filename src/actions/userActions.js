import axios from 'axios';


export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  dispatch({
    type: 'get_users',
    payload: response.data,
  });
};
