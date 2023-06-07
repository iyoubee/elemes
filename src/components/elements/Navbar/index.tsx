import { Elemes } from '@icons'
import { Button } from '@elements'
import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <div className="w-full justify-between bg-white px-5 py-5 flex border-b-[0.5px] sticky top-0 z-50 items-center">
      <Elemes />
      <div className="gap-6 items-center justify-center font-rubik text-[#757575] hidden lg:flex">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Promotions</p>
        <p className="cursor-pointer">Blogs</p>
        <p className="cursor-pointer">Contact Us</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <p className="font-rubik font-semibold cursor-pointer hidden lg:block">
          Masuk
        </p>
        <Button variant={1} className="text-white">
          Daftar Sekarang
        </Button>
      </div>
    </div>
  )
}
