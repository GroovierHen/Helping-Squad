import history from '../../history';
import store from '../../store/store';
var getLoggedinUserServices = {
    getUsers:(data)=>{
        fetch('/get_users?jobType='+data,{
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.length){
                store.dispatch({
                    type:'GET_EMPLOYEES',
                    employees:resp
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


}

export default getLoggedinUserServices;