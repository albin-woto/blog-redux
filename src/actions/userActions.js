import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/userTypes';

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
};
