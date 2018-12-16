import userService from '../../../services/userServices/userService';

var defaultState = {
    signin:false
}


const loginReducer = (state = defaultState,action)=>{
    switch(action.type){

        case 'LOGIN_ACTION':
        userService.loginUser({
            username:action.email,
            password:action.password,
            latitude:action.latitude,
			longitude:action.longitude
        })
        return state
        
        case 'LOGIN_RESPONSE':
        return{
            signin:true,
            ...action.payload
        }

        case 'USER_LOGOUT_RESPONSE':
        return{
            signin:false
        }
        
        default:
        return state;
    }
}

export default loginReducer;