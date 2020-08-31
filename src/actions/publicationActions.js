import axios from 'axios';
import { GET_BY_USER, LOADING, ERROR } from '../types/publicationTypes';
import { GET_ALL } from '../types/userTypes';

export const getPublicationByUser = (id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  try {
    const { users } = getState().userReducer;
    const { publications } = getState().publicationReducer;

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    const updated_publications = [...publications, response.data];

    dispatch({
      type: GET_BY_USER,
      payload: updated_publications,
    });

    const user_index = users.findIndex((user) => user.id === parseInt(id));
    console.log(user_index)
    const publications_index = updated_publications.length - 1;
    const updated_users = [...users];
    updated_users[user_index] = {
      ...users[user_index],
      publications_index,
    };
    console.log('updated_users', updated_users)

    dispatch({
      type: GET_ALL,
      payload: updated_users,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
