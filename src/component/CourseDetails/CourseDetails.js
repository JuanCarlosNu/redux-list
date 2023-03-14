import React from "react";
import "./CourseDetails.css";
import { connect } from "react-redux";

const CourseDetails = ({courses})=> {
  console.log(courses)

 return (
    <div className="course__details"> 
   {/*   <div className="img__container--d">
        <img
          className="course__img--d"
          src={courses.courseImage}
          alt={course_img}
        />
      </div>

      <div className="course__content--d">
        <span className={X ? "course__status--d" : ""}>
          {courses.isHot? "Hot" : null}
        </span>

        <h3 className="course__title--d">{courses.title}</h3>
        <p className="course__desc--d">{courses.desc}</p>
        <span className="course__price--d">{courses.price} $</span>

        <div className='catigories--d'>
          {courses.catigories.map(cat=> (
            <p>{cat}</p>
          ))}
        </div>
        <p className="course__students--d">{courses.students} students enrolled</p>
        <p className="course__date--d">published: {courses.publishedDate}</p>
          </div>*/}
    </div>
  );
};

const getCoursesfromStore = state =>{
  console.log(state)
  return(
  {
    courses: state.courses.courses,
  }
  
  )
}
export default connect({getCoursesfromStore})(CourseDetails);
