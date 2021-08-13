import React from 'react'
import { Link } from "react-scroll";



const HeaderMin = (props) => {


    return(      
            <div className="header-min">
                <span className="min-nav-close" onClick={
                    ()=>{
                        const headerMin = document.querySelector('.header-min');
                        const underLay = document.querySelector('.underlay');
                        headerMin.style.display = 'none';
                        underLay.style.display = 'none';
                    }
                }>x</span>
                <nav id="navbar-min">
                    <li className="ham-menu">
                        <i className="fas fa-hamburger"></i>
                         Menu
                    </li>
                    <li><i className="fas fa-home"></i> <a className="home-link" href="https://miraclekingabaye.herokuapp.com/">Home</a></li>
                    <li> 
                    <i className="fas fa-user"></i>        
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
                     <i className="fas fa-cog"></i>        

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
                     <i className="fa fa-tasks" aria-hidden="true"></i>              

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
                     <i className="fas fa-envelope"></i>             
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
                    <i className="fas fa-certificate"></i>
                     {props.link}
                </li>
                </nav>
            </div>
    );
}

export default HeaderMin;