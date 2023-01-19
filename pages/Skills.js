import {React , useEffect } from 'react';
import Image from 'next/image';
import html from '../Images/html.webp'
import css from '../Images/css.webp'
import js from '../Images/js.webp'
import tailwind from '../Images/t.webp'
import react from '../Images/react.webp'
import next from '../Images/next-js.webp'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Skills = () => {


  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

  return (<>
  <div className='min-h-screen bg-gradient-to-r from-blue-300 to-white '>
  <div className='text-3xl align text-center font-serif text-bold '>SKILLS</div>

  

  <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
  <div className='align items-center  pt-16 grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
 <div className='md:mx-36  flex items-center justify-center bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl h-[190px] w-[190px] bg-blue-100'>
<Image src={html} alt="" />

  </div>


  <div className='md:mx-36   flex items-center justify-center bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl  h-[190px] w-[190px] bg-blue-100'>
<Image src={css} alt="" />
  </div>


  <div className='md:mx-36 flex  bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
  <Image src={js} alt="" />
  </div>

  <div className='md:mx-36   flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image className='w-[20vh]' src={tailwind} alt="" />
  </div>

  <div className='md:mx-36  flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
<Image className='w-[20vh]' src={react} alt="" />
  </div>

  <div className='md:mx-36  flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[190px] w-[190px] bg-blue-100'>
  <Image className='w-[20vh]' src={next} alt="" />
  </div>


 
  </div>


  </motion.div>
    </div>

   
   </> );
}

export default Skills;