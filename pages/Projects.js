import React from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';
import doctor from '../Images/doctor.png'

const Projects = () => {
    
const [isOpen , setIsOpen] = useState(false);
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-300 to-white'>
      <motion.div  onClick={() => setIsOpen(!isOpen)}  className='mx-8 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-28'>
        <motion.div className='flex flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>HCARE</p>
            <Image className='w-[30vh] pt-2 mx-20' src={doctor} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'>its is a healthcare dashboard that caters to your healthcare needs</p>

            </motion.h2>
            
            <button className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
            {isOpen && (
            
           
            <motion.div>
                <p className='text-xl'>
                <div className='flex '>
                <button className='mx-8 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>Github</button>
                <button className='mx-8 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>Visit</button>
                </div>

                </p>
            </motion.div>
            )}
        </motion.div>
        
               
      </motion.div>
      
  
           
    </div>
  );
}

export default Projects;
