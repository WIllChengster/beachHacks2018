import types from './types';
import axios from 'axios'

export function authCheck(){
    const response = axios.get('/auth/check');
    return{
        type: types.AUTH_CHECK,
        payload:response
    }
}