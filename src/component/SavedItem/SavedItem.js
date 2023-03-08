import React from 'react';

const SavedItem = ({savedItem}) => {
    return ( 
        <div>
            <div className='saved__img--container'>
                <img className='saved__img' src={} alt='img' />
            </div>
            <h3 className='saved__title'>{}</h3>
            <p className='saved__author'>{}</p>

            <div className='saved__price'>
                <span className='saved__number'>{}</span>
                <span className='saved__dollarsign'>$</span>
                
                <span></span>
                
          </div>
        </div>
     );
}
 
export default SavedItems;