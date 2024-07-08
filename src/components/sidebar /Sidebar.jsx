
import "./sidebar.css";
import profilePic from "./profile.png"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={profilePic}
          alt=""
        />
        <p>
        I'm an avid explorer with a passion for discovering new destinations and cultures. 
        Every journey I take adds a new chapter to my adventure-filled life story. <br />
        <br />
        Here, you'll find my experiences, tips, and dream destinations. 
        Join me as I navigate the world's most fascinating places, one trip at a time!
        
        
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              Destinations
           
          </li>
          <li className="sidebarListItem">
    
              Food & Drinks
           
          </li>
          <li className="sidebarListItem">
            
              Travel tips 
           
          </li>
          <li className="sidebarListItem">
            
              Travel fashion
            
          </li>
          <li className="sidebarListItem">
            
              City trips 
         
          </li>
          <li className="sidebarListItem">
         
              Luxury stays 
          
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}