import { cn } from '@/utils/class-names'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn('rounded-lg border border-gray-500 bg-black/70 px-5 py-3 text-sm uppercase', className)}
    ></button>
  )
}
