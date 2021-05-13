
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
            <div className="col-md-6 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            <div className="col-md-6 pt-4"><img className='w-100' src={continuum} alt="First slide"></img></div>
            </div>
            <div className='row'>        
            <div className="col-md-3 pt-4"></div>
            <div className="col-md-6 color-w pt-4 pageOne">Twenty years ago, in the mountains of a municipality known today as "Corinto", in southern Colombia, immersed in the complexities of war, pre-Columbian tombs and ceramics began to appear in the fields of peasants, in the crops of indigenous people and in the traverses of guerrillas. The FARC, together with the inhabitants of the region, began to recover these objects and created a community museum that today is inaccessible due to the persistence of the armed conflict, drug trafficking and abandonment.</div>
            <div className="col-md-3 pt-4"></div>
            </div>
           
            <div className='color-w pt-10 pageOne'>
            <span>Canvar</span>
            </div>
        </div>
        </div>
    )
}