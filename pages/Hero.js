import {React ,useEffect } from "react";
import Link from "next/link";
import hero from '../Images/logo.png'
import Image from "next/image";
import ReactTyped from 'react-typed';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Links from "./Links";



const Variant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Hero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);



  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen  bg-gradient-to-r from-blue-300 to-white flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
      <motion.div 
 className="box"
      ref={ref}
      variants={Variant}
initial="hidden" 
animate={control}
transition={{ dealy: 0.2 , type: 'spring' ,stiffnes: 120 }}>
      <Image src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </motion.div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-3xl text-2xl md:leading-normal leading-10  font-bold">
          <motion.div className='title'
initial={{ y: -250}}
animate={{ y: -10}}
transition={{ dealy: 0.2 , type: 'spring' ,stiffnes: 1000 }}>
<h1 className='md:mx-32 mx-16 sm:pt-10 md:text-5xl text-5xl md:leading-normal leading-30 font-bold '>
<span className='md:text-6xl text-5xl'>
<span className='font-serif '>Hey</span>
 <br />
 <span className='font-serif '>THIS IS</span>


 <br /><span className='border-b-8 border-blue-900 font-serif'>DIVYESH JAIN</span>
</span>
</h1>
<p className='md:mx-32 mx-16  text-xl pt-3'>
<ReactTyped
            className='md:text-xl sm:text-xl font-serif text-xl font-bold md:pl-4 pl-2 '
            strings={['FRONTEND DEVELOPER' , 'FREELANCER' ]}
            typeSpeed={140}
            backSpeed={140}
            loop
             /> <br />
  
</p>
<br />

<p className="mx-32 pt-18 font-serif text-2xl  rounded-bl-xl py-3 px-1 flex items-center gap-2">Student By Day::Developer By Night</p>
</motion.div>
</h1>
</div>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div></section>
    
  );
};

export default Hero;