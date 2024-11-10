import { cn } from '@/utils/class-names'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const Label = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full animate-pulsate items-center justify-center bg-black/30 p-4 text-2xl uppercase text-white',
        className
      )}
    >
      {children}
    </div>
  )
}
