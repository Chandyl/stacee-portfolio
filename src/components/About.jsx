import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#7D3780] text-[#f1faee]'>
        <div className='flex flex-col item-left justify-center items-around w-full h-full'>
     
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
       
          <div className='sm:text-right pb-5 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-[#E9BD43]'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello,</p>
            </div>
            <div>
              <p class="indent-8 pt-7">
                I'm Stacee, I've been in the beauty industry as a hair stylist for...well, lets just say several years. After both my kids left home for college, I wanted to go to school to learn more about computers.</p>

              <p class="indent-8">I started out first taking courses for Business Office Support Systems. After mastering MS Office, desktop publishing, touch-typing, records and information management, I took a programming course. It was then I realized my passion for the world of web development and the beauty behind building useful websites.</p>

                 <p class="indent-8"> I have graduated and I’m now looking for a administrative assistant position or a junior dev position to finally kick start my career and learn among professionals. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};


export default About