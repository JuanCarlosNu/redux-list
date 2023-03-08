import React from 'react';
import { connect } from 'react-redux';
import SavedItem from '../SavedItem/SavedItem';

const SavedList = ({saved}) => {
    console.log(saved)
    return (  
        <div>
            {
            saved.length === 0 ? <div>"not saved courses"</div>:
             <div>{ saved.map(savedItem => <SavedItem key={savedItem.id} savedItem={savedItem}/>)}</div>

            }
        </div>
    );
}
const getSavedFromStore= state =>{
    
    return{
        saved: state.savedList.saved
    };
}
 
export default connect(getSavedFromStore) (SavedList);  