
function loginAction(user){
    return{
        type:'LOGIN_ACTION',
        ...user
    }
}
export default loginAction;