import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='left' >
        <h2>User Details</h2>
      </div>
      <div className='right'>
      <div><a href="">Home</a></div>  
      <div><a href="">Products</a></div> 
      <div><a href="">User</a></div> 
      <div>  <a href="">Contact</a></div>
      </div>
    </div>
  )
}

export default Navbar
