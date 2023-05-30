import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="row col">
          <div className="col-6 d-flex justify-content-around">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-around">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <NavLink
                  className={"nav-link social"}
                  to={"https://github.com/dryxos118"}
                  target="blank"
                >
                  <FaGithub />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={"nav-link social"}
                  to={"https://www.linkedin.com/in/alexis-hu-46bb76254/"}
                  target="blank"
                >
                  <FaLinkedin />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
