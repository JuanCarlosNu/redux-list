import data from '../data/courses.json'
import {combineReducers } from 'redux'

const initState ={
    courses: data,
    inputSearch: "",
    saved: []
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
const savedList = (state=initState, action)=>{
    return state
}

export default combineReducers({
    //courses: courses, ---we can simplify this
    courses,
    savedList,

})