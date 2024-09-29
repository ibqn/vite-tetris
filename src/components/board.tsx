import { Block, BOARD_SIZE } from '@/types'
import { Cell } from '@/components/cell'

type Props = {}

export const Board = (props: Props) => {
  const board = Array.from<Block>({ length: BOARD_SIZE }).fill(Block.EMPTY)
  board[199] = Block.I
  board[198] = Block.I
  board[197] = Block.J
  board[186] = Block.J
  board[196] = Block.L
  board[188] = Block.O

  return (
    <div className="shadow-glow grid grid-cols-10 gap-px border border-white bg-black/70 p-px">
      {board.map((block, index) => (
        <Cell key={index} block={block} />
      ))}
    </div>
  )
}
