import React, { useState } from "react";

import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaDribble,
} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

import { FiSend } from 'react-icons/fi';

import "./contact.css"

const Contact = () => {

  // const [formState, setFormState] = useState({});

  // const config = {
  //   SecureToken: 'f798e3f9-9317-4203-a832-9657d673f433',
  //   To : 'them@website.com',
  //   From : "you@isp.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }

  // const changeHandler = (event) => {
  //   setFormState({...formState, [event.target.name]: event.target.value});
  // }

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const config = {
  //     SecureToken: 'f798e3f9-9317-4203-a832-9657d673f433',
  //     To : 'harshgr441@gmail.com',
  //     From : formState.email,
  //     Subject : "This is from my contact form",
  //     Body : `${formState.name} connected to you over email`,
  //   };

  //   if(window.Email) {
  //     window.Email.send(config).then(() => alert("email sent succesfully"));
  //   }
  // }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. 
            I am always open to discussing new projects, 
            creative ideas or opportunities to be a part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">gaurharsh012@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 98734 93657</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/harsh-gaur144/" className="contact__social-link">
              <FaLinkedin/>
            </a>

            <a href="https://leetcode.com/cpbeginning441/" className="contact__social-link">
              <SiLeetcode/>
            </a>

            <a href="https://github.com/Ch1efEag" className="contact__social-link">
              <FaGithub/>
            </a>

            <a href="https://www.instagram.com/mr_chirpy_/" className="contact__social-link">
              <FaInstagram/>
            </a>

          </div>
        </div>


        {/* <form action="" className="contact__form" onSubmit={submitHandler}> */}
        <form action="https://formspree.io/f/xknleaoy" className="contact__form" method="POST">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" 
              placeholder='Your Name'
              className="form__control"
              name='name'
              autoComplete="off"
              // value={formState.name || ''} 
              // onChange={changeHandler} 
              required
              />
            </div>

            <div className="form__input-div">
              <input type="email" 
              placeholder='Your Email'
              className="form__control" 
              name='email'
              autoComplete="off"
              // value={formState.email || ''} 
              // onChange={changeHandler} 
              required
              />
            </div>

            <div className="form__input-div">
              <input type="text" 
              placeholder='Your Subject'
              className="form__control" 
              
               />
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
            placeholder = 'Your Message'
            className="form__control textarea"
            name="message"
            autoComplete="off"
            required
            ></textarea>
          </div>

          <button className="button">
            <input type="submit" value="Send Message" />
            
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
