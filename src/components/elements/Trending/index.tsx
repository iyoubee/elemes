import React from 'react'
import { TrendingCard } from '../TrendingCard'
import { DATA } from './constant'

export const Trending: React.FC = () => {
  // TODO: Write element's logic

  return (
    <div className="mt-20">
      <div className="">
        <p className="font-rubik font-semibold lg:text-2xl">
          Browser Our Trending
        </p>
        <p className="font-rubik font-semibold text-green-normal lg:text-2xl">
          Receipt
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 frid-cols-1 md:grid-cols-3 mt-10">
        {DATA.map((data) => (
          <TrendingCard
            key={data.name}
            backgroundColor={data.backgroundColor}
            category={data.category}
            image={data.image}
            name={data.name}
            score={data.score}
          />
        ))}
      </div>
    </div>
  )
}
