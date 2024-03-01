"use client";

import classNames from 'classnames';
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, ArrowRightCircleIcon, ArrowRightIcon, HeartIcon } from 'lucide-react';

function Selectcourses() {
  const [isCliked, setisClicked] = useState(1);
  const cardData = [
    {
    index: 1,
    name: "DSA to Development",
    fullname: "Data Structure and Algorithm to Development",
    type: "Self Paced",
    price: "₹1200.00",
  },
    {
    index: 2,
    name: "Course to Data Analyst",
    fullname: "Data Analysist Interview Full Course",
    type: "Self Paced",
    price: "₹1200.00",
  },
    {
    index: 3,
    name: "Data Structure & Algorithm",
    fullname: "'Welcome to our dynamic e-learning platform, your gateway to knowledge'.",
    type: "Self Paced",
    price: "₹1200.00",
  },
    {
    index: 4,
    name: "Data Structure and Algorithm to Development",
    fullname: "Data Structure and Algorithm to Development",
    type: "Self Paced",
    price: "₹1200.00",
  },
]

  return (
    <div className='flex flex-col justify-center p-4 min-h-[50vh] min-w-screen border-2'>
      <div className='flex flex-row w-[100%] justify-between'>
        <div className='flex h-fit w-fit px-20'>
          <button className={classNames('border-2 w-28 h-10 flex justify-center items-center rounded-full', {
            ["bg-[#124752]  text-white"]: (isCliked === 1)
          })} onClick={() => setisClicked(1)}>

            <div><p>All Courses</p></div>
          </button>
          <button className={classNames('border-2 w-28 h-10 flex justify-center items-center rounded-full', {
            ["bg-[#124752]  text-white"]: (isCliked === 2)
          })} onClick={() => setisClicked(2)}>

            <div><p>Self Paced</p></div>
          </button>
          <button className={classNames('border-2 w-28 h-10 flex justify-center items-center rounded-full', {
            ["bg-[#124752]  text-white"]: (isCliked === 3)
          })} onClick={() => setisClicked(3)}>

            <div><p>Programming</p></div>
          </button>
          <button className={classNames('border-2 w-28 h-10 flex justify-center items-center rounded-full', {
            ["bg-[#124752]  text-white"]: (isCliked === 4)
          })} onClick={() => setisClicked(4)}>

            <div><p>Popular</p></div>
          </button>
        </div>
        <div className='flex h-fit w-fit'>
          <button className={classNames('border-2 w-28 h-10 flex justify-center items-center rounded-full', {
            ["bg-[#124752]  text-white"]: (isCliked === 5)
          })} onClick={() => setisClicked(5)}><div><p>See all</p></div></button>
        </div>
      </div>
      <div className='flex justify-center items-center p-6'>
      <Carousel className="w-full max-w-[80%]">
      <CarouselContent className="-ml-1">
        {cardData.map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex h-full flex-col w-full justify-between text-white pb-32">
                    <div className='flex w-full  justify-between text-2xl'>
                      {_.name}
                      <div className='w-10 h-10 border-2 flex justify-center items-center rounded-full shrink-0 '>
                      <HeartIcon/>
                      </div>
                    </div>
                    <div className='h-[70%] w-full  border-2 rounded-3xl backdrop-blur-[8px]'>
                      <div className='flex my-12'>
                        <div className='flex flex-col pl-2'>

                        <div className='text-base font-semibold '>{_.fullname}</div>
                        <div className='text-sm font-normal '>{_.type}</div>
                        <div className='text-base font-medium'>{_.price}</div>
                        </div>
                        <div className='absolute right-2 bottom-5 bg-black rounded-full scale-125'>
                          <ArrowRightIcon className='bg-black rounded-full scale-75'/>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>


    </div>
  )
}

export default Selectcourses
