import { NavLink } from "react-router-dom"
// import './header.css'
const Header = () => {
    return (
        <>

            <div className="header">
                <a href="#default" className="logo">
                    <img src="https://bytecipher.net/wp-content/uploads/2019/11/logo-new.png" alt="logo"></img>
                    Test Project</a>
                <div className="header-right">
                    <a className="" href="/">Logout</a>
                    
                    
                </div>
            </div>
        </>

    )
}
export default Header