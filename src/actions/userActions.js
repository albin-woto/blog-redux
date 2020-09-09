import { GET_ALL, LOADING, ERROR } from '../types/userTypes';

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: 'User info not available.',
    });
  }
};
