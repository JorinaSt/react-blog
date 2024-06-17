
import "./Header.css"
export default function Header() {
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm"> MY TRAVEL BUCKET LIST</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/4319877/pexels-photo-4319877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    );
  }
