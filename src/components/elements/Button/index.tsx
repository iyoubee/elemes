import React from 'react'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        className={`${className} flex h-fit items-center justify-center text-white font-rubik px-4 py-2 rounded-full
  ${variant == 1 && 'bg-green-normal'}
  `}
      >
        {children}
      </button>
    </>
  )
}
