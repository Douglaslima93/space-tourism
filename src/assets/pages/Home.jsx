import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <header>
        <img src='./img/shared/logo.svg'/>
        <nav className='menu'>
          <ul>
            <li><a href='#'>00 HOME</a></li>
            
            <li><Link to='/Destination'>01 DESTINATION</Link></li>
            <li><a href='#crew'>02 CREW</a></li>
            <li><a href='#tecnology'>03 TECNOLOGY</a></li>
          </ul>
        </nav>
      </header>

        <div className='container-space'>
          <section className='space'>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <span>Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
        </span>
        </section>
        <section className='explore'>
          <h2>EXPLORE</h2>
        </section>
        </div>

        </div>
    )
}

export default Home

/*
function Home () {
    return(
        <div className='container-space'>
          <section className='space'>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <span>Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
        </span>
        </section>
        <section className='explore'>
          <h2>EXPLORE</h2>
        </section>
        </div>
    )
}

export default Home
*/