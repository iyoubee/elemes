import { Elemes } from '@icons'
import { Button } from '@elements'
import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <div className="w-full justify-between bg-white px-5 py-5 flex border-b-[0.5px] sticky top-0 z-50">
      <Elemes />
      <Button variant={1}>Daftar Sekarang</Button>
    </div>
  )
}
