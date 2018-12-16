import userService from '../../../services/userServices/userService';

var defaultState = {
    signup:false,
    userAlreadyRegistered:false
}


const signupReducer = (state = defaultState,action)=>{
    switch(action.type){

        case 'SIGNUP_ACTION':
        userService.signupUser({
            firstname:action.firstname,
            lastname:action.lastname,
            email:action.email,
            password:action.password,
            phone:action.phone,
            category:action.category,
            profession:action.profession,
            latitude:action.latitude,
            longitude:action.longitude
        })
        return state;
        
        case 'SIGNUP_RESPONSE':
        return{
            signup:true,
            ...action.payload
        }

        case 'ALREADY_REGISTERED':
        return{
            userAlreadyRegistered:true
        }

        default:
        return state;
    }
}

export default signupReducer;