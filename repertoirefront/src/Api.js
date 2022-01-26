import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost:8080",
    headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access-token':'',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
    } 
}) 