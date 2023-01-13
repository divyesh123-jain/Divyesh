import React from 'react';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import logo from '../Images/logo.png'
import github from '../Images/github.png'

const Hero = () => {
  return (<>
     <section className=' min-h-screen sm:pt-28 flex py-10 md:flex-row flex-col items-center bg-gradient-to-r from-blue-300 to-white'>

    
      <Image
        src={github}
        class=" animation-ping z-20 w-11 absolute left-24 top-56" alt=""
      />
{/* Image section */}

<div className=' mx-7 sm:pt-15 flex-1 pt-5'>

<Image className='md:w-[110vh] w-100' src={logo} alt="" />
</div>

{/* Text section */}

<div className='flex-1'>
<div>
<h1 className='mx-32 sm:pt-10 md:text-5xl text-5xl md:leading-normal leading-30 font-bold '>
<span className='md:text-6xl text-5xl'>
<span className=''>Hey</span>
 <br />
 <span className=' '>THIS IS</span>


 <br /><span className='border-b-8 border-blue-900'>DIVYESH JAIN</span>
</span>
</h1>
<p className='mx-32 text-xl pt-3'>
<ReactTyped
            className='md:text-xl sm:text-xl text-xl font-bold md:pl-4 pl-2 '
            strings={['FRONTEND DEVELOPER' , 'FREELANCER' ]}
            typeSpeed={120}
            backSpeed={140}
            loop
             /> <br />
   l________________
</p>
<br />
<button className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>Contact Me</button>
</div>
</div>
</section>
    </>
  );
}

export default Hero;
