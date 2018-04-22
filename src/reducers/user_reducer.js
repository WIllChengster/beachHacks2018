import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
}


export default (state = DEFAULT_STATE, action) => {
    console.log(action)

    switch(action){
        
        case types.AUTH_CHECK:
            return {...state, auth: payload.data.authenticated};
        default: 
            return {...state}
            
    }
}