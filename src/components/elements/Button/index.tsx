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
        className={`${className} flex h-fit items-center justify-center font-rubik px-4 py-2 rounded-full
  ${variant == 1 && 'bg-green-normal'}
  ${variant == 2 && 'bg-gray-200'}
  `}
      >
        {children}
      </button>
    </>
  )
}
