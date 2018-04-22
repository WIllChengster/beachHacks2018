import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
}


export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.AUTH_CHECK:
            return {...state, auth: action.payload.data.authenticated};
        default: 
            return {...state}
    }
}