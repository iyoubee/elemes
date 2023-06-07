import { GreyStar, OrangeStar } from '@icons'
import Image from 'next/image'
import React from 'react'
import { TrendingCardProps } from './interface'

export const TrendingCard: React.FC<TrendingCardProps> = ({
  backgroundColor,
  category,
  image,
  name,
  score,
}) => {
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
      className={`${backgroundColor} w-full h-full relative p-5 rounded-md flex-none drop-shadow-lg cursor-pointer`}
    >
      <Image
        src={image}
        height={100}
        width={100}
        alt={name}
        className="relative rounded-md"
      />
      <p className="font-rubik mt-5 text-xl font-semibold">{name}</p>
      <p className="font-rubik text-green-normal">{category}</p>
      <div className="flex mt-3">
        {orange.map((score) => (
          <OrangeStar key={score} />
        ))}
        {grey.map((score) => (
          <GreyStar key={score} />
        ))}
      </div>
    </div>
  )
}
