import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6dbRcOPVjYhNc94jxluD7Vt7HZ3ypcu3F8r-kA24a5o'
    }
});