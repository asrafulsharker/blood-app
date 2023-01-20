import React from 'react'
import './Nav.css';
function Nav() {
  return (
    <div className='nav container'>
        <div className='nav-logo'>
            Logo
        </div>
        <div className="nav-menu">
            <ul className="nav-list grid">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                    <a href="#findsdonor" className="nav-link">Finds Donor</a>
                    </li>
                    <li className="nav-item">
                    <a href="#bloodrequest" className="nav-link">Blood Request</a>
                    </li>
                    <li className="nav-item">
                    <a href="#beadonor" className="nav-link">Be A Donor</a>
                    </li>
                    
            </ul>
        </div>
    </div>
  )
}

export default Nav