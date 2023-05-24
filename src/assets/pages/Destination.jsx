import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'


const Destination = () => {
    return (
        <div className='destination'>
            <h1>01 PICK YOUR DESTINATION</h1>
            
            <Carousel fade >
                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/destination/image-moon.png' alt='image-moon'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>MOON</h2>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to 
                        help regain perspective and come back refreshed. While you’re there, take in 
                        some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <p>AVG. DISTANCE: 384,400 KM</p>
                    <p>EST. TRAVEL TIME: 3 DAYS</p>
                        
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/destination/image-mars.png' alt='image-mars'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>MARS</h2>
                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                        the tallest planetary mountain in our solar system. It’s two and a half times 
                        the size of Everest!</p>
                    <p>AVG. DISTANCE: 225,000 KM</p>
                    <p>EST. TRAVEL TIME: 9 Months</p>
                        
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/destination/image-europa.png' alt='image-europa'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>EUROPA</h2>
                    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                        ice skating, curling, hockey, or simple relaxation in your snug 
                        wintery cabin.</p>
                    <p>AVG. DISTANCE: 628,000 KM</p>
                    <p>EST. TRAVEL TIME: 3 Years</p>
                        
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/destination/image-titan.png' alt='image-titan'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>TITAN</h2>
                    <p>The only moon known to have a dense atmosphere other than Earth, Titan 
                        is a home away from home (just a few hundred degrees colder!). As a 
                        bonus, you get striking views of the Rings of Saturn.</p>
                    <p>AVG. DISTANCE: 1.6 Bil KM</p>
                    <p>EST. TRAVEL TIME: 7 Years</p>
                        
                    </span>
                    </div>
    
                </Carousel.Item>
              
            </Carousel>
      </div>
    )
}

export default Destination