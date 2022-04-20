import {connect} 
const SignIn = () => {

    return (
        <>
            <div className="container-left">

                <h3> Sign-In-Form</h3>
                <div className="img-container">
                    <img src="https://th.bing.com/th/id/OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU?w=136&h=180&c=7&r=0&o=5&dpr=1.18&pid=1.7" alt="user-log" />
                </div>
            </div>
            <div className="Signup_form">
                <form action="" >
                    <img className="Signup_form_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx1eRUoVGwxOUkZby1LRtBPhKHN9FphU6hg&usqp=CAU" alt="user-login" />
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" required /><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="password" id="lname" name="lname" required /><br></br>
                    <a href="/signup"><button type="button"  >SignUp</button></a>
                    <button type="submit">SignIn</button>
                </form>

            </div>

        </>
    )
}
export default SignIn