import React, { useEffect  , useState} from 'react';
import './dstyle.css'; // Import your CSS styles
import SideBar from './SideBar';
import Navbar from './Navbar';
function Users() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8800/users").then((data)=>data.json()).then((res)=>setUsers(res));
  },[])
  console.log(users);
  return (
    <body style={{backgroundColor:"#eee"}}>
      <SideBar current={"user"}/>
      <section id="content">
        <Navbar />
        <main>
          <div className="table-data" style={{marginTop:"-10px"}}>
            <div className="order">
              <div className="head">
                <h3>Users Info</h3>
                {/* <i className='bx bx-search' id="i"></i>
                <i className='bx bx-filter' id="i"></i> */}
              </div>
              <table id="user">
                <thead>
                  <tr>
                    {/* <th>Sno</th>  */}
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Qualification</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                   <tr>
                    {/* <td>{user.id}</td> */}
                   <td><p>{user.name}</p></td>
                   <td>{user.email}</td>
                   <td>{user.phno}</td>
                   <td>{user.qualification}</td>
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

export default Users;
