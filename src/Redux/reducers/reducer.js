import {SIGN_IN,SIGN_UP,LOGOUT,DELETE} from '../constants'
import { useNavigate } from 'react-router-dom'
const initState={
    userList:[],
    perPage: 0,
    page: 0,
    pages: 0,    
}

export function UserReducer(state=initState,action){
    const navigate=useNavigate()
    if(action.type===SIGN_IN)
    {
        const userData={
            username:action.user.username,
            password:action.user.password
        }
        
        var axios = require('axios');
        var data = JSON.stringify(userData);

        var config = {
            method: 'post',
            url: 'https://reqres.in/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    else{
        return initState
    }


}