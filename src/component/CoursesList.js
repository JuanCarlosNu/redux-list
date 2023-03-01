import React from 'react';
import { connect } from 'react-redux';


const CoursesList = (props) => {
  console.log(props)
    return (
        <div></div>
          )
        }
    const getCoursesFromStore = state =>{
        console.log(state)
        return{
          courses: state.courses.courses

        }
     }

 
export default connect(getCoursesFromStore)(CoursesList);