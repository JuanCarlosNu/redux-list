import React from "react";
import "./CourseItem.css";
import { Link } from "react-router-dom";

const CourseItem = props => {
  const course = props.course;

  return (
    <div className="course">
      <div className="img__container">
        <img
          className="course__img"
          src={course.courseImage}
          alt={course.title}
        />
      </div>

     

      <Link className='course__link' to={`/courses/${course.id}`}>
        <h3 className="course__title m-left">{course.title}</h3>
      </Link>
      <span className="course__author m-left">By: {course.author}</span>
      <div className="course__price">
        <span className="price__number">{course.price}</span>
        <span>$</span>
      </div>

      <span className={course.isHot ? "course__status" : ""}>
        {course.isHot ? "Hot" : null}
      </span>
    </div>
  );
};

export default CourseItem;
