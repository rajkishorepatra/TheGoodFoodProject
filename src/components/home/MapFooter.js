import React from 'react'
import { GoLocation } from 'react-icons/go'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import '../../css/home/MapFooter.css'

function MapFooter() {
  return (
    <>
      <div className='map-margin'>
        <div className='mapFooter'>
          <div className='embedMap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120119.4392689182!2d85.68630732213518!3d19.808936953842412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c6b8bfe386af%3A0x8f052c84639c7d48!2sShree%20Jagannath%20Temple%2C%20Puri!5e0!3m2!1sen!2sin!4v1669641214596!5m2!1sen!2sin" width="500" height="400" style={{ border: "0" }} allowfullscreen="" title='embedded-map' />
          </div>
          <div className='map-content'>
            <h1 className="text-2xl lg:text-3xl font-bold my-8 uppercase">
              <span className="text-[#e55137]">F</span>Ind US
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam doloremque odio delectus, sunt magnam laborum impedit molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et, adipisci illo quam.</p>

            <p><GoLocation />   1234, xyz colony</p>
            <p><IoIosCall />   +91-7008297411</p>
            <p><AiOutlineMail />   rpatrasm@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapFooter