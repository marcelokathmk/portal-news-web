import axios from 'axios';

export function post(url, body, headers){
    return axios.post(url, body, headers);
}

export function get(url, headers){
    return axios.get(url, headers);
}