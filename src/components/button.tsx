import { cn } from '@/utils/class-names'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

export const Button = ({ className, ...props }: Props) => {
  return <button {...props} className={cn('border p-2', className)}></button>
}
