import axios from 'axios';
import { GET_BY_USER, LOADING, ERROR } from '../types/publicationTypes';

// export const getAllPublications = () => async (dispatch) => {
//   dispatch({
//     type: LOADING,
//   });
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts'
//     );
//     console.log('publication response', response);
//     dispatch({
//       type: GET_BY_USER,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error(error.message);
//     dispatch({
//       type: ERROR,
//       payload: error.message,
//     });
//   }
// };

export const getPublicationByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  try {
    const { users } = getState().userReducer;
    const { publications } = getState().publicationReducer;
    const user_id = users[key].id;
    
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    const updated_publications = [
      ...publications,
      response.data
    ];

    dispatch({
      type: GET_BY_USER,
      payload: updated_publications,
    });
    console.log('publication user 1 response', response);
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
