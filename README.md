# Online Learning Management System

## Overview

This project is a Learning Management System (LMS) built with React.js for the frontend, Spring Boot for the backend, and MySQL as the database. It provides a comprehensive platform for managing online courses, user profiles, assessments, progress tracking, and more.

## Features

- **User Management:**
  - User registration and login functionality.
  - User profiles with the ability to update information.

- **Course Management:**
  - Admin can add, edit, and manage courses.
  - Course details include name, instructor, description, etc.
  
- **Assessment:**
  - Users can take assessments related to courses.
  - Admin can create and manage assessment questions.

- **Progress Tracking:**
  - Monitor user progress and completion status.
  - Visual representation of progress for users.

- **Certificate Generation:**
  - Automatic certificate generation upon course completion.
  - Personalized certificates with user details.

- **Discussion Forum:**
  - Course-specific discussion forums for users.
  - Interaction between users and instructors.

## Technologies Used

- **Frontend:**
  - React.js
  - Styled with CSS

- **Backend:**
  - Spring Boot
  - RESTful API architecture

- **Database:**
  - MySQL
  - Seven tables: course, learning, progress, discussion, feedback, question, user, assessment

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/learning-management-system.git
    ```

2. Navigate to the frontend and backend folders and follow their respective setup instructions.

3. Run the frontend (React.js) on http://localhost:3000 and the backend (Spring Boot) on http://localhost:8080.

4. Set up the MySQL database and configure the connection.

## Usage

- Visit the application on http://localhost:3000.

- As an admin, you can manage courses, create assessments, and monitor user progress.

- Users can register, log in, view courses, take assessments, and receive certificates.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback is highly appreciated!
