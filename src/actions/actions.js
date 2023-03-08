 

  export const searchCourses= inputSearch=>{
    return{
        type: "SEARCH_COURSES",
        payload: inputSearch ,

    }
 }

export const addSavedItem = item =>{
  return{
    type: 'SAVED_ITEM',
    payload: item,
  }

}
export const remuveSavedItem = id => {
  return{
    type: 'REMOVE_ITEM',
    payload: id,

  }
}