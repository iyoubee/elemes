import React from 'react'
import { CategoryCard } from '../CategoryCard'
import { DATA } from './constant'

export const Category: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="">
        <p className="font-rubik font-semibold lg:text-2xl">
          Browser Our Category
        </p>
        <p className="font-rubik font-semibold text-green-normal lg:text-2xl">
          Receipt
        </p>
      </div>
      <div className="flex gap-5 overflow-x-auto w-full mt-5 h-[250px] items-center">
        {DATA.map((data) => (
          <CategoryCard
            key={data.name}
            backgroundColor={data.backgroundColor}
            count={data.count}
            name={data.name}
            image={data.image}
          />
        ))}
      </div>
    </div>
  )
}
