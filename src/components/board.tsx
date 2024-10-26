import { Block } from '@/types'
import { Cell } from '@/components/cell'

type Props = {
  board: Block[]
}

export const Board = ({ board }: Props) => {
  return (
    <div className="grid grid-cols-10 gap-px border border-white bg-black/70 p-px shadow-glow">
      {board.map((block, index) => (
        <Cell key={index} block={block} />
      ))}
    </div>
  )
}
