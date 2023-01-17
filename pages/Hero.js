import {React , useEffect } from 'react';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import logo from '../Images/logo.png'
import github from '../Images/github.png'




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



  return (<>
     <section className=' min-h-screen sm:pt-28 flex py-10 md:flex-row flex-col items-center bg-gradient-to-r from-blue-300 to-white'>


 
  

    
      <Image
        src={github}
        class=" animation-ping z-20 w-11 absolute left-24 top-56" alt=""
      />
     
{/* Image section */}

<div className=' mx-7 sm:pt-15 flex-1 pt-5'>
<motion.div 
 className="box"
      ref={ref}
      variants={Variant}
initial="hidden" 
animate={control}
transition={{ dealy: 0.2 , type: 'spring' ,stiffnes: 120 }}>
<Image className='md:w-[110vh] w-100' src={logo} alt="" />
</motion.div>
</div>

{/* Text section */}

<div className='flex-1'>
<div>
<motion.div className='title'
initial={{ y: -250}}
animate={{ y: -10}}
transition={{ dealy: 0.2 , type: 'spring' ,stiffnes: 1000 }}>
<h1 className='mx-32 sm:pt-10 md:text-5xl text-5xl md:leading-normal leading-30 font-bold '>
<span className='md:text-6xl text-5xl'>
<span className='font-serif'>Hey</span>
 <br />
 <span className='font-serif '>THIS IS</span>


 <br /><span className='border-b-8 border-blue-900 font-serif'>DIVYESH JAIN</span>
</span>
</h1>
<p className='mx-32 text-xl pt-3'>
<ReactTyped
            className='md:text-xl sm:text-xl font-serif text-xl font-bold md:pl-4 pl-2 '
            strings={['FRONTEND DEVELOPER' , 'FREELANCER' ]}
            typeSpeed={140}
            backSpeed={140}
            loop
             /> <br />
   l________________
</p>
<br />

<button className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>Contact Me</button>
</motion.div>
</div>

</div>

</section>
    </>
  );
}

export default Hero;
