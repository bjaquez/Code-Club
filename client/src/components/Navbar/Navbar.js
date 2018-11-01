import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props)=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top" style={{paddingLeft:'50px', paddingRight: '50px'}}>
    <Link to='/'> <div className="navbar-brand" href="#">Navbar</div></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
       <Link to ='/'> <a className="nav-link">Home</a></Link>
      </li>
      <li className="nav-item">
        <Link to='/Login'><a className="nav-link" >Login</a></Link>
      </li>
      
    </ul>
  </div>
</nav>

    )
}

export default Navbar