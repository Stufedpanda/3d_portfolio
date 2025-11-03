import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className='font-medium sm:text-xl text-center'> {text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className="text-center neo-brutalism-blue py-4 px-6 text-white 
                mx-auto 
                sm:text-lg sm:leading-snug 
                md:text-xl md:leading-relaxed 
                max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      Hey, my name's <span className='font-semibold'> Forbes </span> 👋
      <br/>
      I'm a software engineer with a Bachelors in machine learning, recently graduated from the University of Toronto.
      {/* <br/>
      I'm currently based in Toronto, CA and looking to apply my extensive technical and research experience in a full-time software or machine learning role. */}
    </h1>
  ),
  2: (
    <InfoBox 
      text="I've worked on a multitude of projects and companies and picked up many skills along the way. I am now looking for a new opportunity to apply my knowledge and grow further."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox 
    text="Here's a few projects that I'm currently working, check them out below."
    link="/projects"
    btnText="View my projects"
  />
  ),  
  4: (
    <InfoBox 
    text="Looking to collaborate or chat? Send me an email below."
    link="/contact"
    btnText="Let's connect"
  />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo