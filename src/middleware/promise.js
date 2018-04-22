export default store => next => action => {

    if( !action.payload || !action.payload.then){
        return next(action)
    }


    action.payload.then(res => {
        const newAction = {...action, payload: res}
        console.log('found a promise')
        store.dispatch(newAction)
    });
    return action.payload

}