import React from 'react'
import LOGO from '../img/logo.png'
import { Link } from "react-scroll";



const HeaderNav = (props) => {
    

    return(      
            <div className="header">
                <nav><img className="logo" src={LOGO} alt="logo"/></nav>
                <nav id="navbar">
                    <li><a className="home-link" href="https://miracle-exceptional-programmer.herokuapp.com/">Home</a></li>
                    <li>              
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            About
                        </Link>
                     </li>
                     <li>              
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            Skills
                        </Link>
                     </li>
                     <li>              
                        <Link
                            activeClass="active"
                            to="my-works"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            My works
                        </Link>
                     </li>
                     <li>              
                        <Link
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            Contacts
                        </Link>
                     </li>
                     <li>
                     {props.link}
                     </li>
                </nav>

                <nav className="burger burger-visiblility">
                <li className="ham-menu" onClick={
                    ()=>{
                        const headerMin = document.querySelector('.header-min');
                        const underLay = document.querySelector('.underlay');
                        headerMin.style.display = 'block';
                        underLay.style.display = 'block';
                    }
                }>
                        <i className="fas fa-hamburger"></i>
                    </li>
                </nav>
            </div>
    );
}

export default HeaderNav;