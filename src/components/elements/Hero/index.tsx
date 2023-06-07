import React from 'react'
import Image from 'next/image'
import { CardProfile } from '../CardProfile'
import { Button } from '../Button'

export const Hero: React.FC = () => {
  return (
    <div className="">
      <div>
        <p className="font-rubik font-bold text-4xl text-green-normal">
          Good Food Us
        </p>
        <p className="font-rubik font-bold text-4xl text-green-normal">
          Good Mood
        </p>
      </div>
      <div className="w-full mt-10">
        <div className=" w-fit relative">
          <Image
            src={'/images/plate.svg'}
            alt="plate"
            width={150}
            height={150}
            className="border-8 border-gray-100 rounded-full"
          />
          <CardProfile score={4} />
        </div>
      </div>
      <div className="mt-20">
        <p className="font-rubik text-[#757575]">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
      </div>
      <div className="flex gap-3 mt-5">
        <Button variant={1} className="text-xs drop-shadow-2xl text-white">
          Daftar Sekarang
        </Button>
        <Button variant={2} className="text-xs drop-shadow-2xl">
          About Us
        </Button>
      </div>
    </div>
  )
}
