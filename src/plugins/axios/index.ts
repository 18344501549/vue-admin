import Axios from './Axios';

const http = new Axios({
    baseURL: ' http://localhost:5173/api',
    timeout: 100000,
    headers: {

    }
});


export { http };