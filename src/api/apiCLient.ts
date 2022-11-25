import axios from 'axios';

import { MOVIES_BASE_URL } from '../utils/constants';

export default axios.create({
  baseURL: MOVIES_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
