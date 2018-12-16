var defaultState = {
    employees:[]
}


const markerReducer = (state = defaultState,action)=>{
    switch(action.type){

        case 'GET_EMPLOYEES':
        return{
            employees:action.employees
        }
        default:
        return state;
    }
}

export default markerReducer;