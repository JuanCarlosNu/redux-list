import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (  
   <div>
    <nav className='Header__nav'>
        <ul className='header__list'>
          <li className='header__item'><Link to='/home'>Home</Link></li>
          <li className='header__item'><Link to='/about'>About</Link></li>
          <li className='header__item'><Link to='/blog'>Blog</Link></li>
          <li className='header__item'><Link to='/saved'>Saved</Link></li>
        </ul>
    </nav>
   
        
   </div>
        );
}
 
export default NavBar;
    