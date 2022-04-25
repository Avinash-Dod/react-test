import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { SIGN_IN } from '../../Redux/constants';
import { useDispatch } from 'react-redux';
const SignIn = () => {
    const initialValues = { email: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const errors = {};
    const userData = {
        email: formValues.email,
        password: formValues.password
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };



    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(isSubmit);

        setFormErrors(validate(formValues));
        if (errors.length === 0) {
            setIsSubmit(true);
        }


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
                if (response.status === 200) {
                    localStorage.setItem('token', Object.values(response.data))
                    dispatch({ type: SIGN_IN })
                    navigate("/dashboard")
                }
                else if (response.status === 400)
                    alert("User not found")
                
            })
            .catch(function (error) {
                alert("Incorrect Email or Password")
            });

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
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">Signed in successfully</div>
                ) : (
                    <pre>{JSON.stringify(formValues, 2)}</pre>
                )} */}

                <form action="" method="post" onSubmit={onSubmitHandler}>
                    <img className="Signup_form_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx1eRUoVGwxOUkZby1LRtBPhKHN9FphU6hg&usqp=CAU" alt="user-login" />
                    <label htmlFor="firstname">email:</label><br></br>
                    <input type="text" name="email" placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange} /><br></br>
                    <p className='error-message'>{formErrors.email}</p>
                    <label name="lname">Password:</label><br></br>
                    <input type="password" name="password" placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange} /><br></br>
                    <p className='error-message' >{formErrors.password}</p><b></b>
                    <p className='error-message' >{formErrors.message}</p>
                    <a href="/signup"><button type="button"  >SignUp</button></a>


                    <button type="submit" >SignIn</button>
                </form>

            </div>

        </>
    )
}
export default SignIn