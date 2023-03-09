import React from 'react';
import '../SavedItem/SavedItem.css'
import { connect } from 'react-redux';
import { removeSavedItem } from '../../actions/actions';

const SavedItem = ({savedItem, removeSavedItem}) => {
    return ( 
        <div className='saved__item'>
            <div className='img__container--saved'>
                <img className='course__img--saved' src={savedItem.courseImage} alt='img' />
            </div>
            <h3 className='course__title--saved'>{savedItem.title}</h3>
            <p className='course__author--saved'>{savedItem.author}</p>

            <div className='course__price--saved'>
                <span className='price__number'>{savedItem.price}</span>
                <span className='saved__dollarsign'>$</span>
            </div>
            <span className={savedItem.isHot? 'course__status--saved': null}>{savedItem.isHot? "Hot":""}</span>
            <span className='remove__item' onClick={ () => removeSavedItem(SavedItem.id)}>Remove</span>
        </div>
     );
}
 
export default connect(null, {removeSavedItem})(SavedItem);