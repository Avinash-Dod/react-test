import { logout } from "../../Redux/actions/action"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>

            <div className="header">
                <a href="#default" className="logo">
                    <img src="https://bytecipher.net/wp-content/uploads/2019/11/logo-new.png" alt="logo"></img>
                    Test Project</a>
                <div className="header-right">
                    <button type="button" onClick={() => {
                        dispatch(logout())
                        navigate("/")
                    }}>Logout</button>

                </div>
            </div>
        </>

    )
}


export default Header 