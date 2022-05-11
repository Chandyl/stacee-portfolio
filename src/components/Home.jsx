import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#7D3780]'>

{/* Container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#E9BD43]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f1faee]'>
          Stacee Williams
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#E9BD43]'>
          I'm a Front End Web Developer.
        </h2>
        <p className='text-[#f1faee] py-4 max-w-[700px]'>
        I’m passionate about building things for the web. Skilled in HTML, JavaScript and React but still exploring other technologies and frameworks that catch my interest!
        </p>
        <div>
          <button className='text-[#f1faee] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E9BD43] hover:border-white-600'>
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home