import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav><header>
        <img src='./img/shared/logo.svg'/>
        <nav className='menu'>
        <Link to='/' className='icones-menu'>00  Home</Link>
        <Link to='destination' className='icones-menu'>01  Destination</Link>
        <Link to='crew' className='icones-menu'>02  Crew</Link>
        <Link to='tecnology' className='icones-menu'>03  Tecnology</Link>
        </nav>
      </header>
            
        </nav>
    )
}

export default Navbar