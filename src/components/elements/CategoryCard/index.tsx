import React from 'react'
import { CategoryCardProps } from './interface'
import Image from 'next/image'

export const CategoryCard: React.FC<CategoryCardProps> = ({
  backgroundColor,
  count,
  image,
  name,
}) => {
  return (
    <div
      className={`${backgroundColor} h-[200px] flex flex-col items-center justify-center relative rounded-lg w-[230px] flex-none transition-all hover:scale-110 drop-shadow-lg cursor-pointer`}
    >
      <Image
        src={image}
        height={50}
        width={50}
        alt={name}
        className="relative"
      />
      <div className="w-full flex flex-col items-center justify-center">
        <p className="font-rubik font-semibold mt-5">{name}</p>
        <p className="font-rubik">{count} items</p>
      </div>
    </div>
  )
}
