import React from 'react';
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Navbar = () => {

 

 
  return (
    
    <div>
      <nav className='md:fixed md:w-full md:top-0 z-[999]'>
      <div className='flex items-center justify-end'>
      <div className='text-white md:block  px-7 py-2 font-medium bg-gray-900 rounded-bl-full '>
  <ul className='flex items-center gap-8  text-lg'>
    <li>
      <Link 
      className='hidden md:block'
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        HOME
      </Link>
    </li>
    <li>
      <Link 
       className='hidden md:block'
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        ABOUT
      </Link>
    </li>
    <li>
      <Link 
       className='hidden md:block'
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        SKILLS
      </Link>

     
    </li>
<li>
    <Link 
     className='hidden md:block'
        activeClass="active"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        PROJECTS
      </Link>
      </li>

      <li>
    <Link 
     className='hidden md:block'
        activeClass="active"
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        CONTACTME
      </Link>
      </li>

  </ul>
  </div>
  </div>
</nav>


       
      </div>


  );
}

export default Navbar;
