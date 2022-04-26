
import { Route, Routes } from "react-router-dom"
import Dashboard from "../Pages/Admin/Dashboard"
import SignIn from "../Pages/User/Signin"
import SignUp from "../Pages/User/Signup"
const Navigation = () => {

    return (

        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />

        </Routes>
    )
}
export default Navigation