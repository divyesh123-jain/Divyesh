import React from 'react';
import about from '../Images/about.png'
import Image from 'next/image';

const AboutMe = () => {
  return (      <>
    <div className='bg-gradient-to-r from-blue-300 to-white'>
    <p className='text-3xl align text-center'>ABOUT ME</p>
    <section className='min-h-screen flex py-10 md:flex-row flex-col items-center'>


<div className='flex-1'>
<div>
<h1 className=' md:text-2xl text-2xl md:leading-normal leading-10 font-bold '>
<div className='align  pb-20 mx-5 font-semi-bold text-justify  '>
       <p>Hi there, I am <span className='text-[#D7FF33] font-bold'>Divyesh Jain</span>, A student passionate about programming and design.
        Currently I am Btech Student,I love to explore new technologies and i am trying to bring my skils to a perfection.
        Though I am most proficient in building <span className='text-[#D7FF33] font-bold'>front-end applications</span>  using <span className='text-[#D7FF33] font-bold'>HTML, CSS, Javascript, React And Next.js</span> I am a quick learner and can pick up new tech stacks as needed.I believe that being a great developer is not using one
         specific language, but choosing the best tool for the job.</p>
         </div>
</h1>
</div>
</div>

{/* Image section */}

<div className='mx-7 flex-1 pt-5'>
<Image src={about} alt="" />
</div>

{/* Text section */}




</section>
    </div>
    </>);
}

export default AboutMe;
