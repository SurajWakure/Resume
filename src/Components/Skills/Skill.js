import React from 'react'
import './Skill.css'
import ui from '../../asset/uiux.png'
import webdesign from '../../asset/webdesign.png'
import appdesign from '../../asset/appdesign.png'
const Skill = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>
            What I do
       </span>
       <span className='skilldescription'>
            I am skilled website designer who has 2 years of industry experience and looking for the better opportunities 
        </span>
        <div className='skillbars'>
            <div className='skillBar'>
                <img src={ui} className='skillbarimg'></img>
                <div className='skillbartext'>
                    <h2>UI/UX design</h2>
                    <p>this is the demo section you can write whatever you want to write in this section oin idfsoisjfjdofjdsojfodsjfodsjfsjfjsfojs f sjfoisjfois fosjfs sjfojdsfofjsofjsof</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webdesign} className='skillbarimg'></img>
                <div className='skillbartext'>
                    <h2>website design</h2>
                    <p>own content</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={appdesign} className='skillbarimg'></img>
                <div className='skillbartext'>
                    <h2>App design</h2>
                    <p>own content</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
