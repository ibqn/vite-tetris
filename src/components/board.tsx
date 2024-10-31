import { Block } from '@/types'
import { Cell } from '@/components/cell'
import { ComponentProps, forwardRef } from 'react'

type Props = {
  board: Block[]
} & ComponentProps<'div'>

type Ref = HTMLDivElement

export const Board = forwardRef<Ref, Props>(({ board }, ref) => {
  return (
    <div ref={ref} tabIndex={-1} className="grid grid-cols-10 gap-px border border-white bg-black/70 p-px shadow-glow">
      {board.map((block, index) => (
        <Cell key={index} block={block} />
      ))}
    </div>
  )
})
