import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/logo-S.png'
import SarveshLogo from '../../assets/images/Sarvesh-arun-logo.png'
import WebD from '../../assets/images/logo_web.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faContactCard, faComputer, faProjectDiagram, faCode} from '@fortawesome/free-solid-svg-icons'
import {
   faLinkedin,
   faGithub,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
   return ( 
     <div className="nav-bar">
       <Link className="logo" to="/">
         <img src={LogoN} alt="Logo" />
         <img className="sub-logo" src={SarveshLogo} alt="Sarvesh Arun" />
         <img className="sub-log" src={WebD} alt="Web Developer" />
       </Link>
       <nav>
         <div className="nav-item">
           <NavLink exact="true" activeclassname="active" to="/">
             <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
           </NavLink>
           <div className="horizontal-line" />
         </div>
         <div className="nav-item">
           <NavLink activeclassname="active" className="about-link" to="/about">
             <FontAwesomeIcon icon={faUserAstronaut} color="#4d4d4e" />
           </NavLink>
           <div className="horizontal-line" />
         </div>
         <div className="nav-item">
           <NavLink activeclassname="active" className="skill-link" to="/skill">
             <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
           </NavLink>
           <div className="horizontal-line" />
         </div>
         <div className="nav-item">
           <NavLink
             activeclassname="active"
             className="project-link"
             to="/project"
           >
             <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
           </NavLink>
           <div className="horizontal-line" />
         </div>
         <div className="nav-item">
           <NavLink
             activeclassname="active"
             className="contact-link"
             to="/contact"
           >
             <FontAwesomeIcon icon={faContactCard} color="#4d4d4e" />
           </NavLink>
         </div>
       </nav>
       <ul>
         <li>
           <a
             className="svg-B"
             href="https://www.linkedin.com/in/sarvesh-arun-8b1904337"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
           </a>
         </li>
         <li>
           <a
             className="svg-B"
             href="https://github.com/Sarvxsh555"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
           </a>
         </li>
         <li>
           <a
             className="svg-B"
             href="https://x.com/sarvxsh_555"
             rel="noreferrer"
             target="_blank"
           >
             <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
           </a>
         </li>
         <li>
           <a
             className="svg-B"
             href="https://leetcode.com/u/Sarvesh_Arun/"
             rel="noreferrer"
             target="_blank"
           >
             <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
           </a>
         </li>
       </ul>
     </div>
   );
}

export default Sidebar