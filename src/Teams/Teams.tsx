
import profile from '../asserts/profile.jpg'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import './Teams.css';
import canvar from '../asserts/canvar.png'
import { Nav } from 'react-bootstrap'
export default function Projects(){

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
                    <Nav.Link className='colorp-w' href="/">HOME</Nav.Link>
                    <Nav.Link className='colorp-w' href="/projects">PROJECTS</Nav.Link>
                    <Nav.Link className='colorp-w' href="/teams">TEAM</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        <div className="col-md-4"></div>
        </div>
        </div>
        <div className='container'>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-3 hoverText"><img className='w-100'src={profile} alt="First slide"></img> <div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText"><img className='w-100'src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText"><img className='w-100'src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-1"></div>
            </div>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-3 hoverText pt-4"><img className='w-100' src={profile} alt="First slide"></img><div className="content">
            <div className="text">Tree</div>
            </div></div>
            <div className="col-md-1"></div>
            </div>
        </div>
        </div>
    )
}