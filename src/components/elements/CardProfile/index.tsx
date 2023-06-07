import Image from 'next/image'
import React from 'react'
import { Props } from './interface'
import { GreyStar, OrangeStar } from '@icons'

export const CardProfile: React.FC<Props> = ({ score, type }) => {
  const orange: number[] = []

  const grey: number[] = []

  for (let i = 0; i < score; i++) {
    orange.push(i)
  }

  for (let i = 0; i < 5 - score; i++) {
    grey.push(i)
  }

  return (
    <div
      className={`flex backdrop-blur-md bg-white bg-opacity-50 absolute bottom-0 w-[200px] py-2 rounded-xl px-2 shadow-lg gap-2
    ${type == 1 && 'translate-y-1/2 left-1/2'}
    ${type == 2 && ''}
    `}
    >
      <Image
        src={'/images/plate.svg'}
        alt="plate"
        width={50}
        height={50}
        className=""
      />
      <div>
        <p className="font-rubik text-xs">Green Salad Tomato</p>
        <p className="text-[10px] text-[#757575]">Tomato</p>
        <div className="flex">
          {orange.map((score) => (
            <OrangeStar key={score} />
          ))}
          {grey.map((score) => (
            <GreyStar key={score} />
          ))}
        </div>
      </div>
    </div>
  )
}
