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
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'> Forbes </span> 👋
      <br/>
      ** desc **

    </h1>
  ),
  2: (
    <InfoBox 
      text="worked with many companies and picked up many skills along the way. I am now looking for a new opportunity to apply my knowledge and grow further."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox 
    text="Currently, I am working on several projects that showcase my skills and creativity. You can check them out below."
    link="/projects"
    btnText="View my projects"
  />
  ),  
  4: (
    <InfoBox 
    text="Looking to collaborate or have a chat? I would love to hear from you!"
    link="/contact"
    btnText="Let's connect"
  />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo