import { useState } from "react"
// import './style.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userdata = {
        username: username,
        password: password
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        var axios = require('axios');
        var data = JSON.stringify(userdata);
        var config = {
            method: 'post',
            url: 'https://reqres.in/api/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });



    }
    return (
        <>
            <div className="container-left">

                <h3> Sign-Up-Form</h3>
                <div className="img-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkkh_54U05yuRQPpjSdLCkcVKFL4frNLHkQ&usqp=CAU" alt="user-reg" />
                </div>
            </div>
            <div className="Signup_form">


                <form action="" onSubmit={onSubmitHandler}>
                    <img className="Signup_form_img" src="https://th.bing.com/th/id/OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU?w=136&h=180&c=7&r=0&o=5&dpr=1.18&pid=1.7" alt="user-reg" />
                    <label for="fname">First name:</label><br></br>
                    <input required type="text" id="fname" name="fname" onChange={(e) => { setUsername(e.target.value) }} value={username} /><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input required  type="password" id="lname" name="lname" onChange={(e) => { setPassword(e.target.value) }} value={password} /><br></br>
                    <button type="submit"  >SignUp</button>
                    <a href="/"><button type="button"  >SignIn</button></a>
                </form>

            </div>

        </>
    )
}
export default SignUp