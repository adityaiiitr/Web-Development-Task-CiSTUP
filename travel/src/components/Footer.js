import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <>

      <footer className="bg-white shadow dark:bg-gray-800 mt-20 bottom-0 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 text-center items-center">
          <span className="text-md text-gray-500 sm:text-center dark:text-gray-400 items-center ">Made by <a href="https://github.com/adityaiiitr" className="hover:underline italic">AdityaIIITR</a>
          </span>


          <div className='flex justify-center text-center items-center w-full mx-auto max-w-screen-xl '>
            <a href="https://github.com/adityaiiitr" className="hover:underline "><AiFillGithub size='1.5rem' /> </a>
            <a href="https://linkedin.com/in/am-adityam/" className="hover:underline"><AiFillLinkedin size='1.5rem' /> </a>
          </div>

        </div>
      </footer>

    </>

  )
}

export default Footer