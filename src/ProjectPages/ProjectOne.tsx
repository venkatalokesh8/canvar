
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
            <div className="col-md-6"><img className='w-100'src={continuum} alt="First slide"></img></div>
            <div className="col-md-1"></div>
            <div className="col-md-3 text-center align-self-center color-w projectPageText"><span>A space to socialize and reflect the violence taken out upon the Trans population or non-normal sexual orientations and gender identities, brought on by social structures and actors of the armed conflict in Colombia.<br/></span></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>
                <div className="col-md-1"></div>
                <div className="col-md-3 text-center align-self-center color-w projectPageText"><span>Original Idea <br/>
                        Red Comunitaria Trans<br/>
                        Daniela MALDONADO SALAMANCA<br/>
                        Tomás ESPINOSa<br/>
                        Paula Gempeler<br/>
                        <br/>
                        PERFORmers<br/>
                        Daniela MALDONADO<br/>
                        Franchesca CABALLERO<br/>
                        Nini Johana PALOMINO<br/>
                        Natalia BERNAL<br/>
                        Valeria LÓPEZ<br/>
                        Bárbara SÁNCHEZ</span></div>
                <div className="col-md-1"></div>
                <div className="col-md-6 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
                <div className="col-md-1"></div>
            </div>
            <div className='row pd-15'>        
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row pd-15'>        
            <div className="col-md-2 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-5 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-5 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row pd-15'>        
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row pd-15'>        
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='color-w pt-4 pageOne'>
            <span>PHOTOS BY<br/>
            JUAN david cortés<br/><br/></span>
            </div>
            <div className='color-w pt-4 pageOne'>
            <span>Project team<br/><br/>
            Daniela MALDONADO SALAMANCA - Tomás ESPINOSa<br/>
            Paula Gempeler - Ana Brape - Andrés BURBANO - Natalia PRADA -Juan Manuel ESCOBAR<br/><br/><br/></span>
            </div>
            <div className='color-w pt-4 pageOne'>
            <span><a className='color-w' href='https://www.facebook.com/Red-Comunitaria-Trans-255992844505189/'>Red comunitaria</a>   - <a className='color-w' href='https://www.instagram.com/tomasitoes/'>Tomas Espinosa</a> - <a className='color-w' href='https://www.instagram.com/_aroastudio/?hl=en'> Aroa Studio </a> 
            </span>
            </div>
            <div className='color-w pt-4 pageOne'>
            <span>LAurels</span>
            </div>
            <div className='row'>
            <div className="col-md-2"></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-4 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-2"></div>
            </div>
            <div className='color-w pt-10 pageOne'>
            <span>Canvar</span>
            </div>
        </div>
        </div>
    )
}