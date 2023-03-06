import data from '../data/courses.json'
import {combineReducers } from 'redux'

const initState ={
    courses: data,
    inputSearch: "",
}

const courses = (state=initState, action)=>{

    if (action.type === 'SEARCH_COURSES') {
        return{
            courses: state.courses,
            inputSearch: action.payload,
        }
    }
    return state
    
}       

export default combineReducers({
    //courses: courses, ---we can simplify this
    courses
})