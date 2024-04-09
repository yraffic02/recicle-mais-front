import axios from 'axios';

export default axios.create({
    baseURL: 'https://recicle-mais-backend.onrender.com/',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});