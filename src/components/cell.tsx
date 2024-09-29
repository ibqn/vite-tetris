import { Block } from '@/types'
import { cn } from '@/utils/class-names'

type Props = {
  block: Block
}

export const Cell = ({ block }: Props) => {
  return (
    <div
      className={cn(
        'size-7',
        Block.EMPTY === block && 'bg-transparent',
        Block.I === block && 'bg-cyan-500',
        Block.J === block && 'bg-blue-500',
        Block.L === block && 'bg-orange-500',
        Block.O === block && 'bg-yellow-500',
        Block.S === block && 'bg-green-500',
        Block.T === block && 'bg-purple-500',
        Block.Z === block && 'bg-red-500'
      )}
    ></div>
  )
}
