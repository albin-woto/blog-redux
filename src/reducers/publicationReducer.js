import { GET_BY_USER, LOADING, ERROR } from '../types/publicationTypes';

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_USER:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: ''
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
