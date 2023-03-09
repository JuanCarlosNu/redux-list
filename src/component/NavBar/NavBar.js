import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../NavBar/NavBar.css'

const NavBar = ({saved}) => {
    return (  
   <div>
    <nav className='Header__nav'>
        <ul className='header__list'>
          <li className='header__item'><Link className='header__link' to='/home'>Home</Link></li>
          <li className='header__item'><Link className='header__link' to='/about'>About</Link></li>
          <li className='header__item'><Link className='header__link' to='/blog'>Blog</Link></li>
        
          <li className='header__item'><Link className='header__link' to='/saved'>Saved</Link>
          <span className='saved__count'>{saved.length}</span>
          </li>
        </ul>
    </nav>
   
        
   </div>
        );
}
const getSavedItems = state =>{
  return{
    saved: state.savedList.saved
  }

}
 
export default connect(getSavedItems)(NavBar);
    