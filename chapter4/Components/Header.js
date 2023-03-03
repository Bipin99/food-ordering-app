import React from 'react'
import './Header.css'
import logo from './assets/logo.png'
function Header() {
    return (
        <div className='header-container'>
           
           <img className='logo' src={logo}/>
            <ul className='nav-items' >
               
                <li>About</li>
                <li>Contact</li>
                <li> Login </li>
                <li> SignUp</li>
                <li> Cart</li>
                
            </ul>
           
            

        </div>
    )
}
export default Header;
