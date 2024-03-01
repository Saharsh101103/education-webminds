
import React from 'react'
import { SliderDemo } from './Slider'
import { SelectDemo } from './Coursepace'

function Options() {
  return (
    <div className='flex justify-center h-10 max-w-screen'>
      <div className='flex w-[60%]'>
        <input type="text" placeholder='Search' className=' border-2 p-2 rounded-l-lg w-[80%] md:w-[30%]' />
        <SliderDemo/>
        <SelectDemo/>
      </div>
    </div>
  )
}

export default Options
