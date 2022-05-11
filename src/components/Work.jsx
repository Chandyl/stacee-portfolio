import React from 'react';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work4 from '../assets/work4.png';
import bb from '../assets/bb.png';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#f1faee] bg-[#7D3780]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='pt-1'>
          <p className='text-5xl font-bold inline border-b-4 text-[#f1faee] border-[#E9BD43]'>
            Work
          </p>
          <p className='py-4'> Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <div
            style={{ backgroundImage: `url(${work4})` }}
            className='shadow-lg shadow-[#E9BD43] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center  text-sm font-bold text-[#f1faee] tracking-wider pl-6 pt-5 ml-2'>
              login forms using React
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/login-react-app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-white font-bold text-lg'>
                    Live Site
                  </button>
                </a>
                <a href='https://github.com/Chandyl/login-react-app'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-white font-bold text-lg'>
                    Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#E9BD43] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center text-sm font-bold text-[#f1faee] tracking-wider pl-6'>
                Google Momentum clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/momentum-clone/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                    Live Site
                  </button>
                </a>
                <a href='https://github.com/Chandyl/momentum-clone'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#E9BD43] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center pl-6 ml-3 text-sm font-bold text-[#f1faee] '>
                Cryptocurrency prices-
                <p className= 'React and Axios'>React and Axios</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/my-crypto-project/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                  Live Site
                  </button>
                </a>
                <a href='https://github.com/Chandyl/my-crypto-project'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                  Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bb})` }}
            className='shadow-lg shadow-[#E9BD43] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center pl-4 ml-2 text-sm font-bold text-[#f1faee] tracking-wider'>
                List of Breaking Bad cast-
                <p className= 'React and Axios'>React and Axios</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/breaking-bad-cast/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                  Live Site
                  </button>
                </a>
                <a href='https://github.com/Chandyl/breaking-bad-cast'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#7D3780] text-[#f1faee] font-bold text-lg'>
                  Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    
  );
};

export default Work;