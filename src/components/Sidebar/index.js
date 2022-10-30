import './index.scss'
import { faEnvelope, faGear, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
    return <div className="nav-container">
            <nav className="nav-bar">
            <NavLink exact="true" activeclassname="active" to="/" className="home-link">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/project" className="portfolio-link">
                <FontAwesomeIcon icon={faSuitcase} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/stack" className="stack-link">
                <FontAwesomeIcon icon={faGear} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            </nav>
    </div>
}

export default Sidebar