import React from 'react';
import '../SavedItem/SavedItem.css'
import { connect } from 'react-redux';
import { removeSavedItem } from '../../actions/actions';
import { Link } from 'react-router-dom';

const SavedItem = ({savedItem, removeSavedItem}) => {
    return ( 
        <div className='saved__item'>
            <div className='img__container--saved'>
                <img className='course__img--saved' src={savedItem.courseImage} alt='img' />
            </div>
            <Link to={`/courses/${course.id}`} >
            <h3 className='course__title--saved'>{savedItem.title}</h3>
            </Link>
            <p className='course__author--saved'>{savedItem.author}</p>

            <div className='course__price--saved'>
                <span className='price__number'>{savedItem.price}</span>
                <span className='saved__dollarsign'>$</span>
            </div>
            <span className={savedItem.isHot? 'course__status--saved': null}>{savedItem.isHot? "Hot":""}</span>
            
            <span className='remove__item' onClick={ () => removeSavedItem(SavedItem.id)}>
            <img src="https://img.icons8.com/cute-clipart/64/null/delete-forever.png" alt='remove img'/>
            </span>
        </div>
     );
}
 
export default connect(null, {removeSavedItem})(SavedItem);