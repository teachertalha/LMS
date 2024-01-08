import React, {useState,useEffect} from 'react';
import './dstyle.css';  
import SideBar from './TSideBar';
import Navbar from './Navbar';
function Dashboard() {
  // const [dashboard , setDashboard] = useState(0);
  
  const [userscount , setUserscount] = useState(0);
  const [coursescount , setCoursescount] = useState(0);
  const[enrolled , setEnrolled] = useState(0);


  useEffect(()=>{

    fetch("http://localhost:8800/users").then((data)=>data.json()).then((res)=>setUserscount(res.length));

    fetch(`http://localhost:8800/tcourses/${localStorage.getItem("tutor_id")}`).then((data)=>data.json()).then((res)=>setCoursescount(res.length));
    fetch(`http://localhost:8800/allTcarts/${localStorage.getItem("tutor_id")}`).then((data)=>data.json()).then((res)=>setEnrolled(res[0].count));
  },[])

 

  return (
    
    <body className='dark' >
      <SideBar current={"dashboard"}/>
      <section id="content" >
        <Navbar />
        <main className='t' style={{height:"100vh"}}>
          <div className="head-title" >
            <div className="left">
              <h1 id="dashboard"  > Dashboard</h1>
              
            </div>
          </div>

          <ul    className="box-info">
            
          {/* <li>
            <i className='bx bxs-group' id="i"></i>
              
              <span className="text">
                <h3>{userscount}</h3>
                <p>Total Users</p>
              </span>
            </li> */}
            <li style={{marginTop:'40px'}} >
            <i className='bx bx-book' id="i"></i>
              <span className="text">
                <h3>{coursescount}</h3>
                <p>Total Courses</p>
              </span>
            </li>
            <li style={{marginTop:'40px'}}>
              <i className='bx bxs-calendar-check' id="i" ></i>
              <span className="text" >
                <h3>{enrolled}</h3>
                <p>Total Enrollment</p>
              </span>
            </li>
          </ul>
        </main>
      </section>
    </body>
  );
}

export default Dashboard;
