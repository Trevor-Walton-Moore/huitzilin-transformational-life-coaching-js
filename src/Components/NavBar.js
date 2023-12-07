import "./css/NavBar.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <NavLink to="/">
                <img className="logo"
                    alt="logo"
                    src="https://res.cloudinary.com/dfrj03hsi/image/upload/v1700623818/Huitzilin/image3_hy4lhx.png" />
            </NavLink>
            <div className="linksContainer">
                <NavLink to="/about" className="navBarLink">
                    About
                </NavLink>
                <NavLink to="/coaching" className="navBarLink">
                    Coaching
                </NavLink>
                <a className="navBarLink"
                    href="https://calendly.com/colibritlc/30min"
                    target="_blank"
                    rel="noReferrer">
                    Connect
                </a>
            </div>
        </div>
    )
}

export default NavBar;
