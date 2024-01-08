

import React, { useEffect  , useState} from 'react';
import './dstyle.css'; // Import your CSS styles
import SideBar from './SideBar';
import Navbar from './Navbar';
function Tutors() {
  const [tutors , setTutors] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8800/tutors").then((data)=>data.json()).then((res)=>setTutors(res));
  },[])
  console.log(tutors);
  return (
    <body style={{backgroundColor:"#eee"}}>
      <SideBar current={"tutor"}/>
      <section id="content">
        <Navbar />
        <main>
          <div className="table-data" style={{marginTop:"-10px"}}>
            <div className="order">
              <div className="head">
                <h3>Tutors Info</h3>
                {/* <i className='bx bx-search' id="i"></i>
                <i className='bx bx-filter' id="i"></i> */}
              </div>
              <table id="user">
                <thead>
                  <tr>
                    {/* <th>Sno</th>  */}
                    <th>Tutorname</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Qualification</th>
                  </tr>
                </thead>
                <tbody>
                {tutors.map((tutor) => (
                   <tr>
                    {/* <td>{user.id}</td> */}
                   <td><p>{tutor.tutor_name}</p></td>
                   <td>{tutor.tutor_email}</td>
                   <td>{tutor.tutor_phno}</td>
                   <td>{tutor.tutor_qualification}</td>
                 </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </body>
  );
}

export default Tutors;
