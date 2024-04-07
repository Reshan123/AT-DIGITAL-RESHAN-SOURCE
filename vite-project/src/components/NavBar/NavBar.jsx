import './styles.css'
import logo from './Images/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const toggleNavBar = () => {
        const navBarID = document.getElementById("hamburgerNavBar")
        navBarID.classList.toggle("open")
    }

    return ( 
        <nav>
            <div className="navBarLogo">
                <img src={logo} alt="AT DIGITAL" />
            </div>
            <div className="hamburgerNavBar" id='hamburgerNavBar'>
                <div className="hamburgerNavBarIcon" onClick={toggleNavBar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="navBarLinkContainer">
                <div className="navBarLink hiddenForLargeViews"><NavLink to='#'>HOME</NavLink></div>
                <div className="navBarLink"><NavLink to='#'>SERVICES</NavLink></div>
                <div className="navBarLink"><NavLink to='#'>ABOUT US</NavLink></div>
                <div className="navBarLink"><NavLink to='#'>CONTACT US</NavLink></div>
                <div className="navBarLink"><NavLink to='#'>CAREERS</NavLink></div>
            </div>
        </nav>
     );
}
 
export default NavBar;