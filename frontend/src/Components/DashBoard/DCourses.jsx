import React from "react";
import "./dstyle.css"; // Import your CSS styles
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [isDeleted, setDeleted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const[cid , setCid] = useState(-1);

  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/courses`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setDeleted(false);
  }, [isDeleted]);

  function deleteCourse(courseId) {
    axios
      .delete("http://localhost:8800/delete", {
        data: { courseId: courseId },
      })
      .then((response) => {
        console.log("Delete successful:", response.data);
        console.log(courses);
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
    setDeleted(true);
    setCid(-1);
  }

  function editCourse(course_id) {
    navigate(`/editCourse/${course_id}`);
  }
  function addquestions(course_id){
    navigate(`/addquestions/${course_id}`)
  }
  return (
    <>
      <body>
        <SideBar current={"courses"} />
        <section id="content">
          <Navbar />
          <main className="t">
            <div className="table-data" style={{ marginTop: "-10px" }}>
              <div className="order">
                <div id="course" className="todo">
                  <div className="head" style={{ marginTop: "-100px" }}>
                    <h3 style={{color:'white'}}>Courses</h3>
                    <button
                      onClick={() => navigate("/addcourse")}
                      style={{
                        backgroundColor: "darkblue",
                        borderRadius: "10px",
                        color: "white",
                        border: "none",
                        padding: "8px",
                        fontWeight: "500",
                      }}
                    >
                      Add Course{" "}
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>{" "}
                    </button>
                  </div>
                  <ul className="todo-list">
                    {courses.map((course) => (
                      <div key={course.course_id}>
                        <li className="completed" style={{ marginTop: "10px",backgroundColor:'white',color:'black' }}>
                          <p >{course.course_name}</p>
                          <div style={{ width: "50px", display: "flex" }}>
                              <button
                                // onClick={() => {setOpenModal(true);setCid(course.course_id)}}
	
                                style={{ marginLeft: "-100px",marginRight:'40px' ,backgroundColor:'white'}}
                                className="delete-button"
                              >
                              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>

                            <button
                              onClick={() => editCourse(course.course_id)}
                              style={{ marginRight: "40px" ,backgroundColor:'white'}}
                              className="edit-button"
                            >
                              <FontAwesomeIcon   icon={faEdit}></FontAwesomeIcon>
                            </button>
                              
                            <button onClick={() => addquestions(course.course_id)}
                            style={{
                              backgroundColor: "#457BC1",
                              borderRadius: "10px",
                              color: "white",
                              border: "none",
                              padding: "8px",
                              fontWeight: "500",
                            }}
                            >
                              Test
                            </button>
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </section>
      </body>
      <Modal
        id="poppup"
        open={openModal}
        onOk={
          ()=>{
            handleOk()
            deleteCourse(cid);
          }}
        onCancel={handleCancel}
        style={{padding:"10px"}}
      >
        <h3>Are you sure want to delete</h3>
      </Modal>
    </>
  );
}

export default Courses;
