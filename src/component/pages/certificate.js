import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/certstylepage.css'
import FooterContanier from '../footer'
import CertificationsImg from '../../img/certifications_img.png'
import ResponsiveWebDesign from '../../img/certifications/Responsive_Web_Design.PNG'
import JavascriptandAlogrithms from '../../img/certifications/Javascript_and_Alogrithms.PNG'
import FrontEndCertification from '../../img/certifications/Front-End_Certification.JPG'
import APIAndMicroservices from '../../img/certifications/API_ And_Microservices.JPG'
import Sololearn_HTML from '../../img/certifications/html-certification.jpg'
import Sololearn_CSS from '../../img/certifications/css-certification.jpg'
import Sololearn_JAVASCRIPT from '../../img/certifications/javascript-certification.png'





const CertificationContainer = () => {


    return (
        <div>
            <div className="header container-header">
                <nav id="certificate-navbar">
                    <li><Link className='nav-link certificate-nav-visibility' to={'/'}>Return Home</Link></li>
                </nav>
            </div>

            <section className="certification-showcase">
                <div className="certification-showcase-ovverlay"></div>
                <img className="certification-showcase-img" src={CertificationsImg} alt="me" />
                <p>My Certifications</p>
            </section>

            <section className="certifications-section">
                <div className="case-to-center">
                    <div className="first-section">
                        <div className="first-header">
                        <h4><span className="left-parenthesis">{`{`}</span> Free Code Camp <span className="right-parenthesis">{`}`}</span></h4>
                        <div>
                        <p>
                           It is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone including me.
                            And so far i have spent so much time even till now learning under this platform. These are the following certifications i acquired so far.
                        </p>
                        </div>
                    </div>

                        <div className="certifications">
                            <div>
                                <img src={ResponsiveWebDesign} alt="Responsive_Web_Design"/>
                                <p>Responsive Web Design</p>
                            </div>

                            <div>
                                <img src={JavascriptandAlogrithms} alt="Javascript_and_Alogrithms"/>
                                <p>Javascript Alogrithms And Data Structures</p>
                            </div>

                            <div>
                                <img src={FrontEndCertification} alt="Front-End_Certification"/>
                                <p>Front End Libraries</p>
                            </div>

                            <div>
                                <img src={APIAndMicroservices} alt="API_And_Microservices"/>
                                <p>API And Microservices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="certifications-section">
                <div className="case-to-center">
                    <div className="first-section">
                        <div className="first-header">
                        <h4><span className="left-parenthesis">{`{`}</span> Solo Learn <span className="right-parenthesis">{`}`}</span></h4>
                        <div>
                        <p>
                        SoloLearn is a series of free apps that allows users to learn a variety of programming languages and concepts through short lessons, code challenges, and quizzes. Lessons are written with the beginner in mind, so anyone can learn to read and write their own code.
                        </p>
                        </div>
                    </div>

                        <div className="certifications">
                            <div>
                                <img src={Sololearn_HTML} alt="Sololearn_html"/>
                                <p>Sololearn HTML</p>
                            </div>

                            <div>
                                <img src={Sololearn_JAVASCRIPT} alt="Sololearn_Javascript"/>
                                <p>Sololearn Javascript</p>
                            </div>

                            <div>
                                <img src={Sololearn_CSS} alt="Sololearn_CSS"/>
                                <p>Sololearn CSS</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <FooterContanier />
        </div>
    );
}

export default CertificationContainer;