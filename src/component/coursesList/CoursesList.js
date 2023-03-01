import React from 'react';
import { connect } from 'react-redux';
import CourseForm from '../CourseForm/CourseForm';
import CourseItem from '../courseItem/CourseItem';
import  './CourseList.css'


const CoursesList = ({courses}) => {
  //console.log(props)
    return (
      <React.Fragment>
        <CourseForm />
      <div className="courses">
      {courses.length === 0
        ? "not items found"
        : courses.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
    </div>
      </React.Fragment>
      
          )
        }
    const getCoursesFromStore = state =>{
        console.log(state)
        return{
          courses: state.courses.courses

        }
     }

 
export default connect(getCoursesFromStore)(CoursesList);