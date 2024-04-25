import React, { useContext } from 'react'

import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';


function Navbar() {
  const{theme,setTheme}=useContext(ThemeContext)
  const{user}=useContext(UserContext)
  //above one object from theme context we are not creating usestate

  const toggletheme=()=>{
    setTheme(theme=="dark"?"light":"dark")
    document.body.style.backgroundColor = theme;
  }

  return (
    <div className='navbar'>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/about'>About</NavLink>

       <NavLink to='/store'>Store</NavLink>
       <NavLink to='/lazy'>Lazy</NavLink>
       {
        user?
        <>
         <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </>
       
        :
        <>
         <NavLink to={'/login'}>Login</NavLink>


        </>

       }
      <button onClick={toggletheme}>Toggle</button>






    </div>
  )
}

export default Navbar