import React from 'react'
import { Parallax } from 'react-parallax';
import table from '../../img/table.jpg'
import '../../css/home/bookTable.css'

function BookTable() {
  return (
    <>
      <Parallax className='tableImage' bgImage={table} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='overlay'>
          <div className='content1'>
            <b><h1>Book Your Table</h1></b>
            <div className='input-fields'>
              <input type={'email'} className='form-control' required placeholder='Your EmailId...' />
              <input type={'number'} className='form-control' required placeholder='No. of guests' />
              <input type={'date'} className='form-control' required />
              <input type={'time'} className='form-control' required />
            </div>
            <button className='glow-on-hover'>Find Table {'>'}</button>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default BookTable