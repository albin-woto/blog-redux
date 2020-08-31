import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/publicationTypes';

export const getAllPublications = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('publication response', response)
    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getByUser = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
  dispatch({
    type: GET_ALL,
    payload: response.data,
  });
  console.log('publication user 1 response', response)
}
