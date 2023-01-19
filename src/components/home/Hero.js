import React from 'react'
import { Parallax } from 'react-parallax';
import bgImg from '../../img/bgimg.jpg'
import '../../css/home/hero.css'

function Hero() {
  return (
    <>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} className='heroImage' bgImage={bgImg} bgImageAlt="" strength={600} bgImageStyle={{ minHeight: "100vh" }}>
          <div className='overlay'>
            <div className='content'>
              <b><h1><span>The </span><br /><span>Good </span><span>Food</span></h1></b>
              <h3>Always fresh & Delightful</h3>
              <button className='glow-on-hover'>Our Menu {'>'}</button>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Hero