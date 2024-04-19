import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

function Nav() {

const a = 3 
  if (a === 3) {
    console.log("Yes")
  }
  return (
    <>
    <nav className="navBar">
        <div className="logo">
            <h1>Crud System</h1>
        </div>
        <div className="lists">
            <ul>
                <li  className= 'links'>
                    <NavLink  to= '/'>Home</NavLink>
                     </li>
                     <li  className= 'links'>
                    <NavLink   to= '/add_students'>Add Students</NavLink>
                     </li>
                     <li  className= 'links'>
                    <NavLink   to= '/students_list'>Student List</NavLink>
                     </li>
            </ul>
        </div>
    </nav>

    
    
    </>
  )
}


export default Nav
