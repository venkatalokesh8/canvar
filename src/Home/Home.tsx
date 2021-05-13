import './Home.css';
import canvar from '../asserts/canvar.png'
import comp1 from '../asserts/comp1.png'
import comp2 from '../asserts/comp2.png'
import comp3 from '../asserts/comp3.png'
import comf1 from '../asserts/conference1.png'
import comf2 from '../asserts/conference2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <div>
      <div id="mySidenav" className="sidenav">
        <a href="/" id="blog">Home<FontAwesomeIcon icon={faHome} className='sideicon'></FontAwesomeIcon></a>
        <a href="/projects" id="projects">Projects<FontAwesomeIcon icon={faTasks} className='sideicon'></FontAwesomeIcon></a>
        <a href="/teams" id="contact">Team<FontAwesomeIcon icon={faUsers} className='sideicon'></FontAwesomeIcon></a>
      </div>
      </div>
      <div className='container centerd pt-50'>
        <img src={canvar} className='widthimg' alt='canvar'></img>
      </div>

      <div className='container centerd pt-50'>
        <span className='color-w'>Collective of Digital Artists in Virtual and Augmented Reality</span>
        <div className='pt-20'>
        <div className='inline pr-10'><FontAwesomeIcon icon={faInstagram} size='2x' className='sideicon  color-white'></FontAwesomeIcon></div>
        <div className='inline pr-10'><FontAwesomeIcon icon={faYoutube} size='2x' className='sideicon  color-white'></FontAwesomeIcon></div>
        <div className='inline pr-10'><FontAwesomeIcon icon={faEnvelope} size='2x' className='sideicon  color-white'></FontAwesomeIcon></div>
        </div>
      </div>
      <div className='container pt-50'>
        <div className='row'>
          <div className="col-6 centerd">
            <a href='/projects'> <button type="button"  className="btn btn-outline-info btn-sm">PROJECTS</button></a>
          </div>
          <div className="col-6 centerd">
            <a href='/teams'> <button type="button" className="btn btn-outline-info btn-sm">TEAMS</button></a>
          </div>
           
        </div>
      </div>
      <div className='container'>
        <div id="carouselExampleSlidesOnly" className="carousel slide pt-50" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block  h-180" src={comp3} alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block  h-180" src={comp2} alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block  h-180" src={comp1} alt="Third slide"></img>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container-fluid pt-50'>
      <h4 className='centerd color-w'>CONFERENCES:</h4>
        <div className='row pt-20'>
          <div className='col-6  centerd'>
          <img src={comf1} className='imageSizeconf' alt="First slide"></img>
          </div>
          <div className='col-6  centerd'>
          <img  src={comf2} className='imageSize' alt="First slide"></img>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
