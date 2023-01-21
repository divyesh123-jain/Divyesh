import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-white md:fixed md:w-full md:top-0 z-[999]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link
            to="section1"
            smooth={true}
            duration={500}
            className="text-2xl font-medium text-white">
            DJ
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2  hover:bg-blue-300">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block lg:flex lg:items-center w-full lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
          <Link
            to="section1"
            smooth={true}
            duration={500}
            className="text-xl mx-4 font-medium  	cursor: pointer ">
            Home
          </Link>
            <Link
              to="section2"
              smooth={true}
              duration={500}
              className="block mt-4 text-xl mx-4 lg:inline-block lg:mt-0 cursor: pointer  mr-4">
              AboutMe
            </Link>
            <Link
              to="section3"
              smooth={true}
              duration={500}
              className="block mt-4 text-xl mx-4 lg:inline-block lg:mt-0 	cursor: pointer  mr-4">
              Skills
            </Link>
            <Link
              to="section4"
              smooth={true}
              duration={500}
              className="block mt-4 text-xl mx-4 lg:inline-block 	cursor: pointer lg:mt-0 ">
              Projects
            </Link>
            <Link
              to="section5"
              smooth={true}
              duration={500}
              className="block mt-4 text-xl mx-4 lg:inline-block 	cursor: pointer lg:mt-0">
              ContactMe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
