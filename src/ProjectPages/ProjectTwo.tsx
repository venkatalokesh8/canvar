
import continuum from '../asserts/Continuum_Portada_temporal.png'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import './ProjectPages.css';
import canvar from '../asserts/canvar.png'
import { Nav } from 'react-bootstrap'
export default function ProjectTwo(){

    return (
        <div>
            <div className='container'>
            <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4">
        <Navbar bg="black" expand="lg">
        <Navbar.Brand href="#home">
                    <img
                        src={canvar}
                        width='50'
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='colorp-w ff' href="/">HOME</Nav.Link>
                    <Nav.Link className='colorp-w ff' href="/projects">PROJECTS</Nav.Link>
                    <Nav.Link className='colorp-w ff' href="/teams">TEAM</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        <div className="col-md-4"></div>
        </div>
        </div>
        <div className='containerfluid'>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-6"><img className='w-100'src={continuum} alt="First slide"></img></div>
            <div className="col-md-1"></div>
            <div className="col-md-3 text-center align-self-center color-w projectPageText"><span>Two artists work for the first time with immersive technology, creating a series of 360° VR dance films with 3D audio.<br/> <br/> <br/>The results are beautiful pieces that represent them culturally and artistically, challenging their traditional dominance of their art and expanding their interaction with the spectator.<br/></span></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-5 text-center align-self-center color-w projectPageText"><span>The project started in Paris, France with a series of experiments with local performers. As the format evolved, we started giving a broader vision. With artists’ support and collaboration, we were able to start in cities closer to París, like Antony and Fontainebleau. Thanks to participants' connections and the CANVAR association support, we were able to collaborate in Barcelona, Spain. Finally, thanks to the support of the XR international community support we obtained the Kaleidoscope’s Creative Challenge 2020 Grant and the Artizen Transformation Grant 2021. This international recognition was pivotal to our proposal.</span></div>
            <div className="col-md-1"></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>        
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row'>        
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-3 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>

            <div className='row'>        
            <div className="col-md-4 pt-4"></div>
            <div className="col-md-4 color-w pt-4 pageOne"> <span>The final product will include 21 360° video-dances from Argentina, Colombia, France, Panama, Peru, Mexico and Spain, exhibited in a Web XR virtual world in a multi user platform.
LAURELS<br/></span></div>
            <div className="col-md-4 pt-4"></div>
            </div>
            
            <div className='color-w pt-10 pageOne'>
            <span>LAurels</span>
            </div>
            <div className='row'>
            <div className="col-md-2"></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-2"></div>
            </div>
            <div className='row'>        
            <div className="col-md-4 pt-4"></div>
            <div className="col-md-4 color-w pt-4 pageOne"> <span>We invite you to join us in this exciting journey with any of your capacities, as an artist, as a producer, as a funding party or as an spectator.<br/></span></div>
            <div className="col-md-4 pt-4"></div>
            </div>
            <div className='color-w pt-10 pageOne'>
            <span>Canvar</span>
            </div>
        </div>
        </div>
    )
}