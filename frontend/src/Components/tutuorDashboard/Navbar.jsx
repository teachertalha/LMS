import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Navbar(){
  const navigate = useNavigate();
  function handleLogOut(){
    localStorage.removeItem("tutor_id");
    localStorage.removeItem("tutor_name");
    localStorage.removeItem("tutor_email");
    localStorage.removeItem("token")
    toast.success('Signed Out ', {
      position: 'top-right', 
      autoClose: 1000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: false, 
      draggable: false, 
    });
    navigate("/")
  }
    return(
        <nav >
          <i className='bx bx-menu' style={{color:'white'}}></i>
          <h4 style={{color:'white'}}>Tutor</h4>
          <form action="#">
            <div className="form-input">
            </div>
          </form>
          <button onClick={()=>{
            navigate('/')
          }} className="sgn-but">
                Exit
              </button>
        </nav>
    );
}

export default Navbar;