import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#7D3780] text-[#f1faee]'>
        
     
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#E9BD43]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Stacee, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I've been in the beauty industry as a hair stylist for...well, lets just say several years. After both my kids left home for college, I wanted to go to school to learn more about computers.
              I started out first taking courses for Business Office Support Systems. After mastering MS Office, desktop publishing, touch-typing, records and information management, I took a programming course. It was then I realized my passion for the world of web development and the beauty behind building useful websites.
              I have graduated and I’m now looking for a administrative assistant position or a junior dev position to finally kick start my career and learn among professionals.
</p>  
            </div>
          </div>
      </div>
    </div>
  );
};


export default About