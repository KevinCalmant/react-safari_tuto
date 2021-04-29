import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://angular-safari-tuto.firebaseio.com/',
});

export default axios;
