import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

const Crew = () => {
    return (
        <div className='crew'>
            <h1>02 MEET YOUR CREW</h1> 
            
            <Carousel fade >
                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/crew/image-douglas-hurley.png' alt='douglas-hurley'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>COMMANDER</h2>
                    <h3>Douglas Hurley</h3>
                    <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                        and former NASA astronaut. He launched into space for the third time as 
                        commander of Crew Dragon Demo-2.</p>
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/crew/image-mark-shuttleworth.png' alt='mark-shuttleworth'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>MISSION SPECIALIST</h2>
                    <h3>Mark Shuttleworth</h3>
                    <p> Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                        African to travel to space as a space tourist.</p>
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/crew/image-victor-glover.png' alt='victor-glover'/>
                    </div>

                    <span className='container-descricao'> 
                        
                    <h2>PILOT</h2>
                    <h3>Victor Glover</h3>
                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                        International Space Station. Glover is a commander in the U.S. Navy where 
                        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                        station systems flight engineer. </p>
                    </span>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/crew/image-anousheh-ansari.png' alt='anousheh-ansari'/>
                    </div>

                    <span className='container-descricao'> 
                        
                    <h2>FLIGHT ENGINEER</h2>
                    <h3>Anoushes Ansari</h3>
                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                        fly to the ISS, and the first Iranian in space.  </p>
                    </span>
                    </div>
                </Carousel.Item>

            </Carousel>
      </div>
    )
}

export default Crew