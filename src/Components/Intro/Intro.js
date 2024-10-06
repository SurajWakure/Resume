import React from 'react'
import './Intro.css'
import surajimg from '../../asset/Surajimg.png'
import { Link } from 'react-scroll'
import button from '../../asset/btn.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='Hello'>Hello,</span>
            <span>I am <span className='introname'>Suraj</span></span><br/>
            <span>Fullstack Developer</span>
            <p className='intropara'>I am the Fullstack Dotnet developer <br/>with 2 yr of handson experience</p>
            <Link><button className='btn'><img src={button} className='btnimg'></img>HireMe</button></Link>
        </div>
        <img src={surajimg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro
