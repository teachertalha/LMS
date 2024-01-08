import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditCourse() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const location = useLocation();
  const courseId = location.pathname.split("/")[2];

  const [formData, setFormData] = useState({
    course_name: '',
    instructor: '',
    price: '',
    discription: '',
    y_link: '',
    p_link: '',
  });

  const [formErrors, setFormErrors] = useState({
    course_name: '',
    instructor: '',
    price: '',
    discription: '',
    y_link: '',
    p_link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input and set error message
    let error = '';
    if (name === 'course_name' && value === '') {
      error = 'Course name is required';
    } else if (name === 'instructor' && value === '') {
      error = 'Instructor is required';
    } else if (name === 'price' && value === '') {
      error = 'Price is required';
    } else if (name === 'discription' && value === '') {
      error = 'Description is required';
    } else if (name === 'y_link' && value === '') {
      error = 'Video Link is required';
    } else if (name === 'p_link' && value === '') {
      error = 'Image Link is required';
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(`http://localhost:8800/course/${courseId}`);
        const fetchedCourse = response.data[0];
        setFormData(fetchedCourse);
      } catch (err) {
        setError('Error fetching course');
      }
    }
    fetchCourse();
  }, [courseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors in formErrors state
    for (const key in formErrors) {
      if (formErrors[key]) {
        setError('Please fill in all required fields.');
        return;
      }
    }

    const response = await axios.put(
      `http://localhost:8800/updateCourse/${courseId}`,
      formData
    );

    if (response.status === 200) {
      console.log('Course updated successfully');
      navigate("/tCourses");
      toast.success('Updated successfully', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    } else {
      console.error('Course update failed');
    }
  };

  return (
    <div className='add'>
      <div className='container1'>
        <h2>Edit Course</h2>
        <form onSubmit={handleSubmit} className="addCourse-form">
          <label>Course Name: </label>
          <input type="text" name="course_name" value={formData.course_name} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.course_name && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.course_name}</span>}

          <label>Instructor: </label>
          <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.instructor && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.instructor}</span>}

          <label>Price: </label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.price && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.price}</span>}

          <label>Description: </label>
          <input type="text" name="discription" value={formData.discription} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.discription && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.discription}</span>}

          <label>Video Link: </label>
          <input type="text" name="y_link" value={formData.y_link} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.y_link && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.y_link}</span>}

          <label>Image Link: </label>
          <input type="text" name="p_link" value={formData.p_link} onChange={handleChange} required style={{ width: "100%" }} />
          {formErrors.p_link && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'start'}}>{formErrors.p_link}</span>}

          {error && <span className='error-msg' style={{color:'red',fontWeight:'bold',textAlign:'center'}}>{error}</span>}

          <div className='btn1'><button type="submit">Update</button></div> 
        </form>
      </div>
    </div>
  );
}

export default EditCourse;