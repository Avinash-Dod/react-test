import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import './style.css'

const SignUp = () => {
    const initialValues = { email: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    // const navigate = useNavigate();
    // const dispatch = useDispatch()
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
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0) {
            // console.log(formValues);
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
        setFormErrors(validate(formValues));
        if (Object.values(errors).length !== 0) {
            return
        }
        else {

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
                console.log(JSON.stringify(response.data));
                alert("Registered Successfully")
            })
            .catch(function (error) {
                console.log(error);
                alert("Invalid Email")
            });


            };
    
          

    };
   
    return (
        <>
            <div className="container-left">

                <h3> Sign-Up-Form</h3>
                <div className="img-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkkh_54U05yuRQPpjSdLCkcVKFL4frNLHkQ&usqp=CAU" alt="user-reg" />
                </div>
            </div>
            <div className="Signup_form">
  {/* {Object.keys(formErrors).length === 0  ? (
                    <div className="ui message success">Signed in successfully</div>
                ) : (
                    <pre>{JSON.stringify(formValues, 2)}</pre>
                )}  */}

                <form action="" onSubmit={onSubmitHandler}>
                    <img className="Signup_form_img" src="https://th.bing.com/th/id/OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU?w=136&h=180&c=7&r=0&o=5&dpr=1.18&pid=1.7" alt="user-reg" />
                    <label htmlFor="email">First name:</label><br></br>
                    <input  type="text" name="email"placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange} /><br></br>
                    <p className='error-message'>{formErrors.email}</p>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input  type="password"  name="password" placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange} /><br></br>
                    <p className='error-message' >{formErrors.password}</p>
                    <button type="submit"  >SignUp</button>
                    <a href="/"><button type="button"  >SignIn</button></a>
                </form>

            </div>

        </>
    )
}

export default SignUp