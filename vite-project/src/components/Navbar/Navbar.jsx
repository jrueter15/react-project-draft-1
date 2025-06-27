import React from 'react'
import './Navbar.css'
import search_icon from '../../assets/search-icon-png-9985.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="" alt="" className="logo"/>
        <h1>Self-Improvement Hub</h1>
        <ul>
            <li>Home</li>
            <li>Future Feature 1</li>
            <li>Future Feature 2</li>
            <li>About</li>
        </ul>

        {/*
        <div class="search-box">
        <input type="text" placeholder='Search'></input>
        <img src={search_icon} alt=""></img>
        </div>
        */}
    </div>    
  )
}

export default Navbar
