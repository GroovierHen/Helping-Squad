var defaultState = {
    latitude:'',
    longitude:''
}


const userLocationReducer = (state = defaultState,action)=>{
    switch(action.type){
        case 'SET_CURRENT_LOCATION':
        return {
            latitude:action.latitude,
            longitude:action.longitude
        };
        default:
        return state;
    }
}

export default userLocationReducer;