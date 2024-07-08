
import { Link } from "react-router-dom";
import "./Topbar.css";
import profilePic from "./profile.png";


export default function Topbar() {
  const user = true;
  return (
    <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      <i className="topIcon fab fa-pinterest-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li className="topListItem"> <Link className="link" to="/">ABOUT </Link></li>
        <li className="topListItem"><Link className="link" to="/">CONTACT </Link></li>
        <li className="topListItem">
          <Link className="link" to="/write">
            WRITE
          </Link>
        </li>
        {user && <li className="topListItem">LOGOUT</li>}
      </ul>
    </div>
    <div className="topRight">
      {user ? (
        <Link className="link" to="/settings">
  
           <img
           className="topImg"
           src={profilePic}
           alt="Profile"
         />
         </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
