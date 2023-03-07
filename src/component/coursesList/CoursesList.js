import React from 'react';
import { connect } from 'react-redux';
import CourseForm from '../CourseForm/CourseForm';
import CourseItem from '../courseItem/CourseItem';
import  './CourseList.css'


const CoursesList = ({courses, inputSearch}) => {
  //console.log(props)
  const filtered = courses.filter(course=> course.title.toLowerCase().includes(inputSearch.toLowerCase()))
    return (
      <React.Fragment>
        <CourseForm />
      <div className="courses">
      {filtered.length === 0
        ? "not items found"
        : filtered.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
    </div>
      </React.Fragment>
      
          )
        }
    const getCoursesFromStore = state =>{
        console.log(state)
        return{
          courses: state.courses.courses,
          inputSearch: state.courses.inputSearch

        }
     }

 
export default connect(getCoursesFromStore)(CoursesList);