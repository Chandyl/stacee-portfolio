import React from 'react'

const Contact = () => {
  return (
    
      <div name='contact' className='w-full h-screen bg-[#7D3780] flex justify-center items-center p-4'>
         <form method='POST' action="https://getform.io/f/8e814156-3ad5-4b5c-9fe5-5163a87a6213" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 border-[#E9BD43] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - marieclapp@gmail.com</p>
            </div>
            <input className='bg-[#4A2C40] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#4A2C40]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#4A2C40] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border  hover:bg-[#E9BD43] hover:border-[#E9BD43]  px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    
  )
}


export default Contact