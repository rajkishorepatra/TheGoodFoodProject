import React from 'react'
import { Parallax } from 'react-parallax';
import '../../css/home/hero.css'

function Hero() {
  return (
    <>
      <Parallax className='heroImage' bgImage={require('../../img/bgimg.jpg')} strength={300}>
        <div className='overlay'>
          <div className='content'>
            <b><h1><span>The </span><br/><span>Good </span><span>Food</span></h1></b>
            <br/>
            {/* <h4>Always fresh & Delightful</h4> */}
          </div>
        </div>
      </Parallax>

    </>
  )
}

export default Hero