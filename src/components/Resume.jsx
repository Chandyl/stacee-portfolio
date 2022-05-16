import React from 'react'
import staceeresume from '../assets/staceeresume.png'


const Resume = () => {
  return (
    <div 
     name='resume' className='w-full h-4/5 bg-[#7D3780]'>
    <div className='shadow-md hover:scale-100 duration-500'>
      <img className='scale-75 w-150 mx-auto' src={staceeresume} alt="HTML icon" />
   
    </div>
  </div>

  )
}

export default Resume