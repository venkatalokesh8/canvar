
import continuum from '../asserts/Continuum_Portada_temporal.png'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import './ProjectPages.css';
import canvar from '../asserts/canvar.png'
import { Nav } from 'react-bootstrap'
export default function ProjectOne(){

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
            <div className="col-md-6  pt-4"><img className='w-100'src={continuum} alt="First slide"></img></div>
            <div className="col-md-1"></div>
            <div className="col-md-3 pt-4 text-center align-self-center color-w projectPageText"><span>A space to socialize and reflect the violence taken out upon the Trans population or non-normal sexual orientations and gender identities, brought on by social structures and actors of the armed conflict in Colombia.<br/></span></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>
            <div className="col-md-3 pt-10"></div>
            <div className="col-md-6 pt-10 text-center align-self-center color-w projectPageText"><span>Cimarrón is the name under which white settlers referred to African black who managed to escape the yoke of slavery, and who formed the first enclaves of free Africans in America, also called Palenques. And it is precisely from these places that the most original and typical manifestations of Colombian folklore and tradition come from.</span></div>
            <div className="col-md-3 pt-10"></div>
            </div>
            <div className='row'>        
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row'>        
            <div className="col-md-6 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-6 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            
            <div className='color-w pt-4 pageOne'>
            <span>PHOTOS BY<br/>
            Omar HERNÁNDEZ SÁNCHEZ<br/><br/></span>
            </div>
            <div className='row pt-10'> 
            <div className="col-md-4 pt-4"></div>       
            <div className="col-md-2 color-w pt-4 pageOne"><span>Director<br/>
            Sofía Angulo Ballén</span></div>
            <div className="col-md-2 color-w pt-4 pageOne"><span>choreographer<br/>
            Katerine Olivares</span></div>
            <div className="col-md-4 pt-4"></div>       
            </div>
            <div className='row'>    
            <div className="col-md-2 pt-4"></div>    
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-1 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-2 pt-4"></div>
            </div>
            
            <div className='color-w pt-4 pageOne'>
            <span>Project team</span>
            </div>
            <div className='row pt-10'> 
            <div className="col-md-4 pt-4"></div>       
            <div className="col-md-2  color-w pt-4 pageOne"><span>Producer <br/>
            Rocío Rojas</span></div>
            <div className="col-md-2  color-w pt-4 pageOne"><span>Producer <br/>
            Andrés Burbano</span></div>
            <div className="col-md-4 pt-4"></div>       
            </div>
            
            <div className='color-w pt-10 pageOne'>
            <span>Canvar</span>
            </div>
        </div>
        </div>
    )
}