import React from 'react'
import './Works.css'
import p1 from '../../asset/Portfolio1.png'
import p2 from '../../asset/Portfolio2.png'
import p3 from '../../asset/Portfolio3.png'
import p4 from '../../asset/Portfolio4.png'
import p5 from '../../asset/Portfolio5.png'
import p6 from '../../asset/Portfolio6.png'

const Works = () => {
  return (
    <div id='works'>
      <h2 className='works-title'>My Portfolio</h2>
      <span className='work-desripton'>i am taking pride of payinng attention to small details about my work</span>
      <div className='worksimgs'>
          <img className='worksimage' src={p1}></img>
          <img className='worksimage' src={p2}></img>
          <img className='worksimage' src={p3}></img>
          <img className='worksimage' src={p4}></img>
          <img className='worksimage' src={p5}></img>
          <img className='worksimage' src={p6}></img>
      </div>
      <button className='workbtn'>Seemore</button>
    </div>
  )
}

export default Works
