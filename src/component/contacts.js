import React, { useState } from 'react';
//useContext ,
// import { UserContext } from '../actions/actionReducer'
import axios from 'axios'


const ContactsContainer = () => {
    // const { dispatch, state } = useContext( UserContext );
    // console.log('verify',verify);
    // dispatch({type: 'USER_SUBMIT', state : verify});
    // console.log('state', state);

    const [verify, setVerify] = useState('');


    const sendChange = (e) => {
        setVerify({...verify, [e.target.name]: e.target.value});
    }

    const submitMachine = (e) => {
    e.preventDefault();


    const name = document.querySelector('#name'),        
            email = document.querySelector('#email'),
            subject = document.querySelector('#subject'),
            message = document.querySelector('#message');

   if(checkNameFunctionality(name) && checkEmailFunctionality(email) &&  checkSubjectFunctionality(subject) && checkMessageFunctionality(message)){

            axios.post('https://serverpress.herokuapp.com/transporter/kingpress/data/message/senddata', verify).then((data) => {
                return data;
            }).then(() => {
                document.querySelector('.output-message').style.display = 'block';
            }).catch(err=>console.log(err));
            e.target.reset();
            // output();
    }
    
    } 

    

    const output = () => {
        return (
            <div className="output-message"><span className="success message">Message Sent</span> <span className="close" onClick={succesMsgClose}>x</span></div>
        )
    };

    const succesMsgClose = () => document.querySelector('.output-message').style.display = 'none';

    function checkNameFunctionality(name){
                    if(inputTextisEmpty(name)) return;
                    if(!justLetters(name)) return;
                    return true;
                }
    
    function checkSubjectFunctionality(subject){
                    if(inputTextisEmpty(subject)) return;
                    if(!justLetters(subject)) return;
                    return true;
                }

                function checkMessageFunctionality(message){
                    if(inputTextisEmpty(message)) return;
                    return true;
                }

                function checkEmailFunctionality(email){
                      if(inputTextisEmpty(email)) return;
                      if(!emailExactPattern(email)) return;
                      return true;
                }

                function inputTextisEmpty(element){
                     if(empty(element.value.trim())){
                        inValid(element, `Please fill your ${element.id}`);
                        return true;
                     }
                     else{
                       valid(element);
                       return false;
                     };
                }

                function justLetters(element) {
                    var regex = /^[a-zA-Z ]+$/;
                    if(regex.test(element.value)){
                      valid(element) 
                      return true;
                    }
                    else inValid(element,`${element.id} must have only letters.`);
                }

                function emailExactPattern(element){
                 const regex =/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
                  if(regex.test(element.value)){
                    valid(element);
                    return true;
                  }
                  else inValid(element,`Must be a regular ${element.id}`);
            }

                function empty(value) {
                    if (value === '') return true;
                    return false;
                  }

                  function inValid(element, message) {
                    element.nextElementSibling.textContent = message;
                    element.nextElementSibling.style.color = 'rgb(206, 206, 53)';
                  }

                  function valid(element) {
                    element.nextElementSibling.innerHTML = '';
                  }

    return(      

        <section id="contacts" className="contacts-container">

            <div className="contacts-title">
                <h4><span className="left-parenthesis">{`{`}</span> Contact Me <span className="right-parenthesis">{`}`}</span></h4>
            </div>

            <div className="screen-3">
            
            <div className="form-container">
            <div className="success-message-container">{output()}</div>
                <form id="contact-form" onSubmit={submitMachine} noValidate>
                    <div className="form-inline-row">
                        <div className="col-75">
                            <input id="name"
                             className="contact-input"
                            type="text" 
                            name="name"
                            onChange={sendChange}  
                            placeholder="Name"
                            />
                            <div className="error-message"></div>
                        </div>

                        <div className="col-75">
                            <input id="email" 
                            className="contact-input"
                            type="email" 
                            name="email"
                            onChange={sendChange}  
                            placeholder="Email"
                            
                            />
                            <div className="error-message"></div>
                        </div>
                    </div>


                    <div className="col-75">
                    <input id="subject" 
                    className="contact-input" 
                    type="text" 
                    name="subject"
                    onChange={sendChange}  
                    placeholder="Subject" 
                    />
                    <div className="error-message"></div>
                    </div>

                    <div className="col-75">
                    <textarea id="message" className="contact-textarea" name="message" onChange={sendChange} placeholder="Message" style={{height:'200px'}}></textarea>
                    <div className="error-message"></div>
                    </div>

                <div className="button-case">
                    <button className="submit">Submit</button>
                </div>
                </form>
            </div>
            </div>

            
            </section>

    );
}

export default ContactsContainer;