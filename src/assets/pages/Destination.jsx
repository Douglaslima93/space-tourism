import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'


const Destination = () => {
    return (
        <div className='destination' /*style={{display: 'block', width: 800, padding: 30}}*/>
            <h1>01 PICK YOUR DESTINATION</h1>
            
            <Carousel fade >
                <Carousel.Item>
                    <div>
                    <img src='../img/destination/image-moon.png' alt='image-moon'/>
                    </div>

                    <div>
                        <div>
                    <h2>MOON</h2>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to 
                        help regain perspective and come back refreshed. While you’re there, take in 
                        some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        </div>

                        <div>
                            <div>
                            <p>AVG. DISTANCE</p>
                            <span>384,400 KM</span>
                            </div>

                            <div>
                            <p>EST. TRAVEL TIME</p>
                            <span>3 DAYS</span>
                            </div>
                        </div>
                    </div>
    
                </Carousel.Item>
              
            </Carousel>
      </div>
    )
}

export default Destination