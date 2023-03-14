import React from "react";
import "./CourseItem.css";
import { connect } from "react-redux";
import { addSavedItem, removeSavedItem } from "../../actions/actions";
import { Link } from "react-router-dom";

const CourseItem =({course, addSavedItem, saved, removeSavedItem})  => {
  
  return (
    <div className="course">
      <div className="img__container">
        <img
          className="course__img"
          src={course.courseImage} //  getting the course as from corseslist tag: <CourseItem key={course.id} course={course} />.
          alt={course.title}
        />
      </div>

     

     <Link to={`/courses/${course.id}`}>
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
      <span className="add" onClick={ saved.includes(course)? ()=>removeSavedItem(course.id) : ()=> addSavedItem(course)}>
       { saved.includes(course)? 
        (<img src="https://img.icons8.com/dusk/40/000000/bookmark-ribbon.png" alt="img colored"/>)
        :
        (<img src="https://img.icons8.com/wired/40/000000/bookmark-ribbon.png" alt="img not colored"/>)}
             </span>
    </div>
  );
};
const getSavedFromStore = state =>{
  return{
    saved: state.savedList.saved,
  }
}
  
export default connect(getSavedFromStore, {addSavedItem , removeSavedItem}) (CourseItem);
