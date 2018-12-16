import history from '../../history';
import store from '../../store/store';
var userServices = {
    loginUser:(data)=>{

        fetch('/login_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp._id){

            store.dispatch({
                type:'LOGIN_RESPONSE',
                payload:resp
            });
                if(resp.category !== 'employee'){
                    history.push('/client');
                }
                else{
                    history.push('/employee');
                }
            }
        }).catch((err)=>{

            console.log(err);
        })
    },


    signupUser:(data)=>{
        fetch('/signup_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp._id){
            store.dispatch({
                type:'SIGNUP_RESPONSE',
                payload:resp
            });
            history.push('/login');
        }
            else{
                store.dispatch({
                    type:'ALREADY_REGISTERED',
                    
                });
                alert('Username Already Registered.')
            }
        }).catch((err)=>{
            console.log(err);
        })
    },

    logoutUser:()=>{
        fetch('logout_user',{
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.logout){
                store.dispatch({
                    type:'USER_LOGOUT_RESPONSE'
                })
                history.push('/');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


}

export default userServices;