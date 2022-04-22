import { useNavigate } from 'react-router'
import { useState } from 'react'
import { SIGN_IN } from '../../Redux/constants';
import { useDispatch } from 'react-redux';
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const userData = {
        email: username,
        password: password
    };
    
    function onSubmitHandler(event) {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify(userData);
        var config = {
            method: 'post',
            url: 'https://reqres.in/api/login',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                localStorage.setItem('token', Object.values(response.data))
                dispatch({type:SIGN_IN})
            })
            .then(() => { navigate("/dashboard") })
            .catch(function (error) {
                console.log(error);
            });

        setUsername('');
        setPassword('');



    };


    return (
        <>
            <div className="container-left">

                <h3> Sign-In-Form</h3>
                <div className="img-container">
                    <img src="https://th.bing.com/th/id/OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU?w=136&h=180&c=7&r=0&o=5&dpr=1.18&pid=1.7" alt="user-log" />
                </div>
            </div>
            <div className="Signup_form">
                <form action="" method="post" onSubmit={onSubmitHandler}>
                    <img className="Signup_form_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx1eRUoVGwxOUkZby1LRtBPhKHN9FphU6hg&usqp=CAU" alt="user-login" />
                    <label  htmlFor="firstname">First name:</label><br></br>
                    

                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br></br>

                    <label name="lname">Last name:</label><br></br>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br></br>

                    <a href="/signup"><button type="button"  >SignUp</button></a>

                    <button type="submit" >SignIn</button>
                </form>

            </div>

        </>
    )
}
export default SignIn