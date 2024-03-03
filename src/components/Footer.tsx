import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex relative flex-col justify-center p-2 text-black bg-white border-t-2'>
      <div className='flex justify-center items-center w-full h-16 border-b-2'>
        <div className='h-14 rounded-full flex justify-center items-center w-fit md:w-[70%] border-2 border-black scale-75 md:scale-100'>
          <Link href={''} className='flex justify-center items-center w-24 h-full rounded-full border-2 border-black'>
            <p className='font-bold'>
              Instagram
            </p>
          </Link>
          <Link href={''} className='flex justify-center items-center w-24 h-full rounded-full border-2 border-black'>
            <p className='font-bold'>
              Twitter
            </p>
          </Link>
          <Link href={''} className='flex justify-center items-center w-24 h-full rounded-full border-2 border-black'>
            <p className='font-bold'>
              LinkedIn
            </p>
          </Link>
          <Link href={''} className='flex justify-center items-center w-24 h-full rounded-full border-2 border-black'>
            <p className='font-bold'>
              Whatsapp
            </p>
          </Link>
          <Link href={''} className='flex justify-center items-center w-24 h-full rounded-full border-2 border-black'>
            <p className='font-bold'>
              Pintrest
            </p>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-16 scale-75 md:scale-100'>
        <p className='font-bold'>©2024, All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
