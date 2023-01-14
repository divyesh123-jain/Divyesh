import React from 'react';
import Image from 'next/image';
import html from '../Images/html.webp'
import css from '../Images/css.webp'
import js from '../Images/js.webp'
import tailwind from '../Images/t.webp'
import react from '../Images/react.webp'
import next from '../Images/next-js.webp'
const Skills = () => {
  return (<>
  <div className='min-h-screen bg-gradient-to-r from-blue-300 to-white '>
  <div className='text-3xl align text-center '>SKILLS</div>

  


  <div className='md:mx-48 align items-center pt-16 grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
 <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image src={html} alt="" />

  </div>


  <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image src={css} alt="" />
  </div>


  <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
  <Image src={js} alt="" />
  </div>

  <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image className='w-[20vh]' src={tailwind} alt="" />
  </div>

  <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image className='w-[20vh]' src={react} alt="" />
  </div>

  <div className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
  <Image className='w-[20vh]' src={next} alt="" />
  </div>


  
  </div>



    </div>

   
   </> );
}

export default Skills;