import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='relative     max-w-full min-w-full h-32 text-black bg-white  
    flex flex-col justify-center p-2 border-t-2'>
        <div className='border-b-2  w-full flex justify-center items-center h-16'>

      <div className='h-14 rounded-full flex justify-center items-center w-fit md:w-[70%] border-2 border-black scale-75 md:scale-100'>
        <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black'>
            <p className='font-bold'>
                Instagram
            </p>
        </Link>
        <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black'>
            <p className='font-bold'>
                Twitter
            </p>
        </Link>
        <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black'>
            <p className='font-bold'>
                LinkedIn
            </p>
        </Link>
        <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black'>
            <p className='font-bold'>
                Whatsapp
            </p>
        </Link>
        <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black'>
            <p className='font-bold'>
                Pintrest
            </p>
        </Link>
      </div>
        </div>
        <div className='w-full h-16 flex justify-center items-center scale-75 md:scale-100'>
            <p className='font-bold'>©2024, All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
