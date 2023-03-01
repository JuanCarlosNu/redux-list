import data from '../data/courses.json'
import {combineReducers } from 'redux'

const initState ={
    courses: data,
}

const courses = (state=initState, action)=>{
    return state
    
}       

export default combineReducers({
    //courses: courses, ---we can simplify this
    courses
})