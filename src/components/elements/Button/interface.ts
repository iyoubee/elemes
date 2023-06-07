import { ReactNode } from 'react'

export interface ButtonProps {
  className?: string
  variant: number
  children?: ReactNode
  onClick?: () => void
  disabled?: boolean
}
