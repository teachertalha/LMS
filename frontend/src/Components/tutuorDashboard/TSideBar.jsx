import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/user.png"

function SideBar(props){
    const { current } = props;
    console.log(current);
    return(
        <div id="sidebar" >
        
        <Link to={"/tdashboard"} className="brand a">
          {/* <i className='bx bxs-smile'  ></i> */}
          <img src={img1} alt=""/>
          <span className="text" id="admin" >{localStorage.getItem("tutor_name")}</span>
          </Link>
          
          <ul className="side-menu">
          <li className={current ==="dashboard" ? 'active' : ''} >
            <Link to={"/tdashboard"} className="a">
              <i className='bx bxs-dashboard' id="i"></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={current ==="courses" ? 'active' : ''}>
          <Link to={"/tcourses"} className="a">
              <i className='bx bxs-book' id="i"></i>
              <span className="text">Courses</span>
            </Link>
          </li>
        </ul>
        {/* <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className='bx bxs-log-out-circle' id="i"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul> */}
      </div>
    );
}

export default SideBar