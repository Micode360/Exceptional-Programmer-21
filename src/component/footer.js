import React from 'react'
import Clipboard from 'react-clipboard.js';


const FooterContainer = () => {

    return(      
    <section className="footer">
              <p>Abaye Miracle King {new Date().getFullYear()}</p>
              <span className='footer-icons'>
              <a href="https://www.linkedin.com/in/miracle-king-hesed-6553a818b/"><span className="linkedIn"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span></a>
                      <a href="https://twitter.com/MiracleKing17"><span><i className="fa fa-twitter-square" aria-hidden="true"></i></span></a>
                      <a href="https://github.com/Micode360"><span><i className="fa fa-github-square" aria-hidden="true"></i></span></a>

                          <Clipboard className="clipboard" data-clipboard-text="abayemiracle@gmail.com" onSuccess={()=>{
                             document.querySelector('.clipboard-message-container').style.display = 'flex';
                            }}>
                          <i className="fa fa-envelope-square"></i>
                          </Clipboard>
                          {/* <div className="clipboard-message-container clipboard-for-foooter">
                                Email Copied  <span className="email-close" onClick={()=>{
                                    document.querySelector('.clipboard-message-container').style.display = 'none';
                                    // document.querySelector('.clipboard-message-container').classList.add('up');
                                }}>x</span>
                          </div>  */}
                      </span>
            </section>
    );
}

export default FooterContainer;