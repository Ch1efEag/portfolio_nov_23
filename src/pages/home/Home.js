import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Harsh Gaur.</span> Web Developer
          </h1>

          <p className="home__description">
          I am proficient in front-end, back-end and machine learning. Give me a task, and consider it done.
          </p>

          <Link to='/about' className='button'>
            More About me{' '}
            <span className='button__icon'>
              <FaArrowRight></FaArrowRight>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}
 
export default home
