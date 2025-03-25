import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ---------Left Section ----*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore eos. Fugit eius blanditiis minus dolorum soluta explicabo eos quibusdam eum qui exercitationem modi at, quod veniam! Corrupti, accusamus eaque.</p>
            </div>

            {/* ---------Center Section ----*/}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us </li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ---------Right Section ----*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 6378794956</li>
                    <li>Tahir.malkan@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*----------CopyRight text--------*/}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>© 2025 Kind-Care. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer