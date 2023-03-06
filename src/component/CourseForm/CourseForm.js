import React from 'react';
import './CourseForm.css';
import { Connect } from 'react-redux';
import {searchCourses} from '../../actions/actions'


const CourseForm = ({searchCourses}) => {
    return (  
        <form className='search__Form'>
            <input
            type='text'
            placeholder='search for a course..' 
            className='search__input' 
              onChange={(event)=>searchCourses(event.target.value)}/>
       </form>
    );
}
 
export default Connect(null  , {searchCourses})(CourseForm);    
