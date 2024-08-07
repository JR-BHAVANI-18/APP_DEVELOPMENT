// src/Components/Courses.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

// Sample data for courses
const courseData = [
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPP8lNVvigz1YFlbFkR9-4RYF3hO6UGDUTvQ&s', title: 'React', description: 'Description for Course 1' },
  { id: 2, image: 'https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il', title: 'C++', description: 'Description for Course 2' },
  { id: 3, image: 'https://austingil.com/wp-content/uploads/HTML-Blog-Cover.png', title: 'HTML', description: 'Description for Course 3' },
  { id: 4, image: 'https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png', title: 'Python', description: 'Description for Course 4' },
  { id: 5, image: 'https://readersbuddy.com/assets/img/java.jpg', title: 'Java', description: 'Description for Course 5' },
  { id: 6, image: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644826783284-3.%20Data%20Structures.png', title: 'Data Structures', description: 'Description for Course 6' },
  { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhs798sAMUdpYAW8Mn4b6uq9IYzLtGQsjcA&s', title: 'DBMS', description: 'Description for Course 7' },
  { id: 8, image: 'https://miro.medium.com/v2/resize:fit:1400/1*neG4D9C8UcJvNn6bverfIA.png', title: 'AWS Cloud', description: 'Description for Course 8' },
  { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRWKDKjx3Lr1uf2wVtfGJxlNkQe68mXSRwA&s', title: 'Machine Learning', description: 'Description for Course 9' },
  { id: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLjYAMkZEQWKpSLugdqUUzI8p-l8KGBeEnA&s', title: 'Deep Learning', description: 'Description for Course 10' },
  { id: 11, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTz5b0VHp3jCQ0jUAPQSIur3ZSOZ8UTcUrg&s', title: 'Artificial Intelligence', description: 'Description for Course 11' },
  { id: 12, image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg', title: 'MySQL', description: 'Description for Course 12' },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleEnroll = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="courses-container">
      <h2>Your Courses</h2>
      <div className="courses-grid">
        {courseData.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="enroll-button" onClick={() => handleEnroll(course.id)}>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
