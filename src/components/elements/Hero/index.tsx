import React from 'react'
import Image from 'next/image'
import { CardProfile } from '../CardProfile'
import { Button } from '../Button'

export const Hero: React.FC = () => {
  return (
    <div className="w-full flex">
      <div className="lg:w-1/3 w-full">
        <div className="flex flex-col lg:gap-6">
          <p className="font-rubik font-bold text-4xl text-green-normal xl:text-[50px]">
            Good Food Us
          </p>
          <p className="font-rubik font-bold text-4xl text-green-normal xl:text-[50px]">
            Good Mood
          </p>
        </div>
        <div className="w-full mt-10 lg:hidden lg:mt-0">
          <div className=" w-fit relative">
            <Image
              src={'/images/plate.svg'}
              alt="plate"
              width={150}
              height={150}
              className="border-8 border-gray-100 rounded-full"
            />
            <CardProfile score={4} type={1} />
          </div>
        </div>
        <div className="mt-20 lg:mt-5">
          <p className="font-rubik text-[#757575]">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            variant={1}
            className="text-xs lg:text-base drop-shadow-2xl text-white"
          >
            Daftar Sekarang
          </Button>
          <Button variant={2} className="text-xs lg:text-base drop-shadow-2xl">
            About Us
          </Button>
        </div>
      </div>
      <div className="w-2/3 hidden lg:flex items-center justify-center">
        <div className=" w-fit relative">
          <Image
            src={'/images/plate.svg'}
            alt="plate"
            width={400}
            height={400}
            className="ring-[40px] ring-gray-100 rounded-full"
          />
          <CardProfile score={4} type={2} />
        </div>
      </div>
    </div>
  )
}
