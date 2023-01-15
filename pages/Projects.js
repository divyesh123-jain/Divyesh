import React from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';
import doctor from '../Images/doctor.png'
import deal from '../Images/deal.png'
import e from '../Images/sell.png'
import buy from '../Images/buy.png'
import hive from '../Images/work-space.png'

const Projects = () => {


    
    
const [isOpen , setIsOpen] = useState(false);
const [dev , setIsdev] = useState(false);
const [dj , setIsdj] = useState(false)
const [di , setIsdi] = useState(false)
const [dk , setIsdk] = useState(false)

  return (
    <div className=' min-h-screen  bg-gradient-to-r from-blue-300 to-white'>
      <motion.div    className=' md:mx-8  pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-28'>
      <motion.div className='image'
initial={{ x: '-20vw'}}
animate={{ x: -10}}
transition={{ dealy: 0.2 , type: 'spring' ,stiffnes: 120 }}>
        <motion.div className='grid2-item mx-auto bg-gradient-to-r from-blue-300 to-white flex flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>HCARE</p>
            <Image className='w-[30vh] pt-2 mx-20' src={doctor} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'>its is a healthcare dashboard that caters to your healthcare needs</p>

            </motion.h2>
            
            <button onClick={() => setIsOpen(!isOpen)} className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
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

        <motion.div  className=' grid2-item mx-auto bg-gradient-to-r from-blue-300 to-white flex flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>Inʌent</p>
            <Image className='w-[45vh] pt-2 md:mx-12' src={deal} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'> A website which helps investors and entrepenure to find each other</p>

            </motion.h2>
            
            <button  onClick={() => setIsdev(!dev)} className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
            {dev && (
            
           
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



        <motion.div  className='flex bg-gradient-to-r from-blue-200 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>CollegeGet</p>
            <Image className='w-[45vh] pt-2 md:mx-6' src={e} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'>  A website which helps college students to buy and sell the verious accessories</p>

            </motion.h2>
            
            <button  onClick={() => setIsdj(!dj)} className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
            {dj && (
            
           
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
        
        
        <motion.div  className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>Ecomerce</p>
            <Image className='w-[30vh] pt-2 md:mx-12' src={buy} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'> is is a ecomerce website</p>

            </motion.h2>
            
            <button  onClick={() => setIsdi(!di)} className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
            {di && (
            
           
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



        <motion.div  className='flex bg-gradient-to-r from-blue-300 to-white flex-col dark-shadows transitionall hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer rounded-xl justify-center items-center h-[360px] w-[390px] bg-blue-100'>
            <motion.h2 className='text-5xl  text-center pt-7'  >
            <p className='drop-shadow-md shadow-black'>Hive</p>
            <Image className='w-[45vh] pt-2 md:mx-12' src={hive} alt="" />
            <p className='drop-shadow-lg shadow-black font-semibold text-2xl pt-2'> Revolutionize Your Workflow with Our Advanced 3D Workspace</p>

            </motion.h2>
            
            <button  onClick={() => setIsdk(!dk)} className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>VIEW</button>
            {dk && (
            
           
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
