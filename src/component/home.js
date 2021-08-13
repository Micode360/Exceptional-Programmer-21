import React from 'react';
import HeaderNav from './header'
import HeaderMin from './header-min'
import Me from '../img/me.png'
import MeGIF from '../img/me.gif'
import PosingMe from '../img/posing_me.jpg'
import MyPortfolio001 from '../img/my_portfolio001.JPG'
import LIVEQUOTE from '../img/live-quote.JPG'
import BEATSLANDINGPAGE from '../img/b_landing_page.PNG'
import TRIBUTBARCAPAGE from '../img/barca-tribute.PNG'
import MIPLAY from '../img/mi-play.JPG'
import NEWPORTFOLIO from '../img/new-portfolio.jpg'
// import mONLINE from '../img/m.online.PNG'
// import TODOAPP from '../img/todo-app.png'
import BREESLITTLESTARS from "../img/breeslittlestars.PNG"
import HTML from '../img/html-5.png'
import CSS from '../img/css.png'
import JAVASCRIPT from '../img/javascript.png'
import REACT from '../img/react.png'
import BOOTSTRAP from '../img/bootstrap.png'
import JQUERY from '../img/jquery.png'
import PYTHON from '../img/python.png'
import NODE from '../img/node.png'
import MONGO_DB from '../img/mongo_DB.png'
import HEROKU from '../img/heroku.png'
import FIGMA from '../img/figma.png'
import GITHUB from '../img/github.png'
import VSCODE from '../img/vs_code.png'
import QUALITY from '../img/quality.png'
import WORD from '../img/word.png'
import POWERPOINT from '../img/powerpoint.png'
import ADOBEPHOTOSHOP from '../img/adobe-photoshop.png'
import COMMANDPROMPT from '../img/command-prompt.png'
import API from '../img/api.png'
import ACQUIRING_MORE from '../img/acquiring_more.png'
import ContactsContainer from './contacts';
import Clipboard from 'react-clipboard.js';
import FooterContainer from './footer';
import { Link } from 'react-router-dom';




function HomeDarshBoard() {
    const linkTo = () => {
        return (
            <Link className="home-link" to={'/certifications'}>Certifications</Link>
        );
    }

    return (
        <div className="home">
            <HeaderNav link={linkTo()} />
            <HeaderMin link={linkTo()} />
            <section className="showcase">
                <div className="hero">
                    <div className="hero-texts">
                        <div>
                            <p>Hi, i'm <span className="desert">Abaye Miracle King</span> and i'm an exceptional</p>
                            <h1>Software Engineer</h1>
                            <p>Full Stack Engineer</p>

                            <div className="social_links">
                                <a href="https://www.linkedin.com/in/miracle-king-hesed-6553a818b/"><span className="linkedIn"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span></a>
                                <a href="https://twitter.com/MiracleKing17"><span><i className="fa fa-twitter-square" aria-hidden="true"></i></span></a>
                                <a href="https://github.com/Micode360"><span><i className="fa fa-github-square" aria-hidden="true"></i></span></a>
                                <span>
                                    <Clipboard className="clipboard" data-clipboard-text="abayemiracle@gmail.com" onSuccess={() => {
                                        document.querySelector('.clipboard-message-container').style.display = 'flex';
                                    }}>
                                        <i className="fa fa-envelope-square"></i>
                                    </Clipboard>
                                </span>
                            </div>

                            <p className="hashtag">#Exceptional</p>

                        </div>

                    </div>

                    <div className="hero-image-case">
                        <img className="me" src={Me} alt="me" />
                    </div>
                </div>

            </section>

            <section className="mobile-hero">
                <img className="me-gif" src={MeGIF} alt="me" />
            </section>

            <div className="clipboard-message-container">
                Email Copied  <span className="email-close" onClick={() => {
                    document.querySelector('.clipboard-message-container').style.display = 'none';
                }}>x</span>
            </div>

            <section id="about" className="about">

                <div className="head-section-case">
                    <div className="about-text-container">
                        <h4><span className="left-parenthesis">{`{`}</span> About <span className="right-parenthesis">{`}`}</span></h4>

                        <p>
                            <span className="first-letter">I</span> like to describe myself as a renaissance man because I am multitalented, however I chose to learn the skill of a developer because I see writing languages as a form of art, a story that expresses itself making it's result have meaning to whoever reads it and also efficient to the user. Apart from the software developing world, I am a graphic designer, a lover of certain genres of music, a lover of art, mostly in the animating sector, all the following skills sometimes has a role to play when writing efficient code. I reside in Port Harcourt, River's State, Nigeria, and sometimes at Lagos, Nigeria.
                        </p>
                    </div>
                </div>

                <div className="div-image-container">
                    <img className="posing_me" src={PosingMe} alt="posing_me" />
                </div>
            </section>



            <section id="skills" className="My-Skills" name="mySkills">
                <div className="skills-header">
                    <h4><span className="left-parenthesis">{`{`}</span> My Skills <span className="right-parenthesis">{`}`}</span></h4>
                </div>

                <div className="skills">
                    <div>
                        <img src={HTML} alt="html_icon" />
                        <p>HTML</p>

                    </div>
                    <div>
                        <img src={CSS} alt="css_icon" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={JAVASCRIPT} alt="javascript_icon" />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={BOOTSTRAP} alt="bootstrap_icon" />
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <img src={REACT} alt="react_icon" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src={JQUERY} alt="jquery_icon" />
                        <p>Jquery</p>
                    </div>
                    <div>
                        <img src={PYTHON} alt="python_icon" />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={NODE} alt="node_icon" />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src={MONGO_DB} alt="mongo_DB_icon" />
                        <p>Mongo_DB</p>
                    </div>

                    <div>
                        <img src={HEROKU} alt="heroku_icon" />
                        <p>Heroku</p>
                    </div>
                    <div>
                        <img src={API} alt="api_icon" />
                        <p>Rest_API</p>
                    </div>
                    <div>
                        <img src={POWERPOINT} alt="powerpoint_icon" />
                        <p>Powerpoint</p>
                    </div>
                    <div>
                        <img src={WORD} alt="word_icon" />
                        <p>Word</p>
                    </div>
                    <div>
                        <img src={COMMANDPROMPT} alt="command_prompt_icon" />
                        <p>Command_prompt</p>
                    </div>
                    <div>
                        <img src={GITHUB} alt="github_icon" />
                        <p>github</p>
                    </div>
                    <div>
                        <img src={VSCODE} alt="vs_code_icon" />
                        <p>vs code</p>
                    </div>
                    <div>
                        <img src={QUALITY} alt="quality_icon" />
                        <p>Quality</p>
                    </div>
                    <div>
                        <img src={FIGMA} alt="figma_icon" />
                        <p>Figma</p>
                    </div>
                    <div>
                        <img src={ADOBEPHOTOSHOP} alt="adobe_photoshop_icon" />
                        <p>Adobe_photoshop</p>
                    </div>
                    <div>
                        <img src={ACQUIRING_MORE} alt="acquiring_more_icon" />
                        <p>Acquiring_more</p>
                    </div>
                </div>
            </section>

            <section id="my-works" className="my-works">
                <div className="skills-header">
                    <h4><span className="left-parenthesis">{`{`}</span> My Works <span className="right-parenthesis">{`}`}</span></h4>
                </div>
                <div className="works-center">
                    <div className="works-column-one">

                        <div className="card">
                            <div className="visit-site"><div className="hoverme"> <span className="reveal-button">Visit Site</span></div> <img className="works-img" src={MyPortfolio001} alt="My Portfolio" /></div>
                            <h1>My Webfolio Website.</h1>
                            <h3>Year One</h3>
                            <div className="tools">
                                <span className="tool-case">HTML</span>
                                <span className="tool-case">CSS</span>
                                <span className="tool-case">JavaScript</span>
                                <span className="tool-case">Jquery</span>
                                <span className="tool-case">Node.js Express</span>
                                <span className="tool-case">Microsoft Powerpoint</span>
                            </div>
                            <p>All you need to know about me and my works...... well no need to know that since this one is existing, plus i have outgrown the skillsets in this site overtime. This was my first web portfolio site ever created by me.</p>
                            <a href="https://mirakingfolio.herokuapp.com/" className="read-more" target="blank">Visit Site →</a>
                        </div>


                        <div className="card">
                            <img className="works-img" src={LIVEQUOTE} alt="Live Quote" />
                            <h1>Live Quote App.</h1>
                            <h3>A.K.A Tweet Quote</h3>
                            <div className="tools">
                                <span className="tool-case">React</span>
                            </div>
                            <p>Live quote app was created based on one of freecodecamp's front end project. It is a simple random quote app that at a click of a button can tweet a specific quote</p>
                            <a href="https://Micode360.github.io/live-quote/" className="read-more" target="blank">Visit Site →</a>
                            <a href="https://github.com/Micode360/random-quote" className=" source-code" target="blank">Source Code</a>
                        </div>


                        <div className="card">
                            <img className="works-img" src={NEWPORTFOLIO} alt="New Portfolio" />
                            <h1 className="exceptional-programmer-title">The Exceptional Programmer.</h1>
                            <h3>My New Portfolio</h3>
                            <div className="tools">
                                <span className="tool-case">React</span>
                                <span className="tool-case">Node.js Express</span>
                                <span className="tool-case">PhotoShop</span>
                                <span className="tool-case">Microsoft Powerpoint</span>
                            </div>
                            <p>And yes of course. This very web app. This is the successor of the the previous one. Due to it's coloring and it's errors in responsiveness, i had to create a new one which is what you see before you.</p>
                            <span className="active">Site Active</span>
                        </div>


                        {/* <div className="card">
                            <div className="active-img">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img className="works-img" src={mONLINE} alt="m_online" />
                            </div>

                            <h1 className="exceptional-programmer-title">M.Online.</h1>
                            <h3>My Online Store</h3>
                            <div className="tools">
                                <span className="tool-case">React</span>
                                <span className="tool-case">Node Express</span>
                                <span className="tool-case">Mongo_DB</span>
                                <span className="tool-case">PhotoShop</span>
                                <span className="tool-case">Microsoft Powerpoint</span>
                            </div>
                            <p>An online store. The work is on progress and a lot of changes will still be made. However, I've made it live so you can keep track of it. However, it's progress has been slowed down due to the fact i am working on another project which is the todo app right beside it. But stay tuned for more progress on this web app.</p>
                            <a href="https://m-online.herokuapp.com/" className="read-more" target="blank">Visit Site →</a>
                        </div> */}


                        <div className="card">
                            <img className="works-img" src={BREESLITTLESTARS} alt="Bree's Little Stars" />
                            <h1>Bree's Little Stars.</h1>
                            <h3>Fairexx Solutions</h3>
                            <div className="tools">
                                <span className="tool-case">React</span>
                                <span className="tool-case">Express Node.js</span>
                            </div>
                            <p> I built bree's little stars while working under Fairexx IT Solutions. This is a static web app for a school based in london.</p>
                            <a href="https://www.breeslittlestars.co.uk/" className="read-more" target="blank">Visit Site →</a>
                        </div>

                    </div>


                    <div className="works-column-two">


                        <div className="card">
                            <img className="works-img" src={BEATSLANDINGPAGE} alt="Beats Landing Page" />
                            <h1>Beats Headphone Landing page</h1>
                            <h3>A Product Landing Page</h3>
                            <div className="tools">
                                <span className="tool-case">HTML</span>
                                <span className="tool-case">CSS</span>
                                <span className="tool-case">Bootstrap</span>
                                <span className="tool-case">PhotoShop</span>
                                <span className="tool-case">Microsoft Powerpoint</span>
                            </div>
                            <p>This is a product landing page which markets the beats headphone. The main point of this project is to show css and bootstrap skills </p>
                            <a href="https://b-landing-page.netlify.app" className="read-more" target="blank">Visit Site →</a>
                        </div>


                        <div className="card">
                            <img className="works-img" src={MIPLAY} alt="Mr Produxer" />
                            <h1>Mi-Play.</h1>
                            <h3>Still all Music</h3>
                            <div className="tools">
                                <span className="tool-case">HTML</span>
                                <span className="tool-case">CSS</span>
                                <span className="tool-case">JavaScript</span>
                                <span className="tool-case">Node.js Express</span>
                                <span className="tool-case">PhotoShop</span>
                            </div>
                            <p>In order to sustain the knowledge i acquired in learning JavaScript, i had to build something raw in vanilla javascript. Because of that decision brought Mi-Play to life.</p>
                            <a href="https://mi-play.herokuapp.com/" className="read-more" target="blank">Visit Site →</a>
                            <a href="https://github.com/Micode360/mi-play" className=" source-code" target="blank">Source Code</a>
                        </div>


                        <div className="card">
                            <img className="works-img" src={TRIBUTBARCAPAGE} alt="Tribute-barca" />
                            <h1>Barca-Tribute page</h1>
                            <h3>A Tribute Landing Page</h3>
                            <div className="tools">
                                <span className="tool-case">HTML</span>
                                <span className="tool-case">CSS</span>
                                <span className="tool-case">PhotoShop</span>
                                <span className="tool-case">Microsoft Powerpoint</span>
                            </div>
                            <p>This is a tribute page to certain players in the Barcelona team at the 2015-2020 era. The main point of this project is the same as the beats landing page, to show my CSS and bootstrap skills. However I did not finish this project, yet it still depicts my designing skills and front end skills as the rest do</p>
                            <a href="https://tribute-barca.netlify.app/" className="read-more" target="blank">Visit Site →</a>
                        </div>

                        {/* <div className="card">
                            <div className="active-img">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img className="works-img" src={TODOAPP} alt="todo-app" />
                            </div>
                            <h1>Todo-app</h1>
                            <h3>Under Construction</h3>
                            <div className="tools">
                                <span className="tool-case">React</span>
                                <span className="tool-case">CSS</span>
                                <span className="tool-case">Node Express</span>
                                <span className="tool-case">Mongo_DB</span>
                            </div>
                            <p>I decided to create my todo app with user authentication added to it. It's being built along side with m.online. So if you don't see any progress on m.online, just know i'm working on this one. It's on my local computer for now and not yet on display.</p>
                         
                        </div> */}

                    </div>
                </div>

            </section>
            <ContactsContainer />
            <FooterContainer />
            <div className="underlay" onClick={
                () => {
                    const headerMin = document.querySelector('.header-min');
                    const underLay = document.querySelector('.underlay');
                    headerMin.style.display = 'none';
                    underLay.style.display = 'none';
                }
            }></div>
        </div>
    );
}

export default HomeDarshBoard;