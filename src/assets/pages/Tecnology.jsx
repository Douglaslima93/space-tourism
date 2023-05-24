import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

const Tecnology = () => {
    return (
        <div className='tecnology'>
            <h1>03 SPACE LAUNCH 101</h1> 
            
            <Carousel fade >
                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/technology/image-launch-vehicle-portrait.jpg' alt='launch-vehicle-portrait'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>THE TERMINOLOGY...</h2>
                    <h3>Launch vehicle</h3>
                    <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!</p>
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/technology/image-spaceport-portrait.jpg' alt='spaceport-portrait'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>THE TERMINOLOGY...</h2>
                    <h3>Spaceport</h3>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                         by analogy to the seaport for ships or airport for aircraft. Based in the 
                        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                        of the Earth’s rotation for launch.</p>
                    </span>
                    </div>
    
                </Carousel.Item>

                <Carousel.Item>
                    <div className='section-carousel'>
                    <div>
                    <img src='../img/technology/image-space-capsule-portrait.jpg' alt='space-capsule-portrait'/>
                    </div>

                    <span className='container-descricao'>
                        
                    <h2>THE TERMINOLOGY...</h2>
                    <h3>Space capsule</h3>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                        you'll spend your time during the flight. It includes a space gym, cinema, 
                        and plenty of other activities to keep you entertained.</p>
                    </span>
                    </div>
    
                </Carousel.Item>


            </Carousel>
      </div>
    )
}

export default Tecnology