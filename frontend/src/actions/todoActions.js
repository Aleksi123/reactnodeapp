import axios from 'axios';
import { GET_TODOS} from './types';

export const getTodos = () => dispatch => {
  axios
    .get('/api/todos')
    .then(res =>
      dispatch({
        type: GET_TODOS,
        payload: res.data
      }))
};
