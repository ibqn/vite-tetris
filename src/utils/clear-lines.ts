import { BOARD_WIDTH } from '@/consts'
import { BoardShape, Block } from '@/types'
import { getEmptyLine } from '@/utils/empty-board'

export const clearLines = (board: BoardShape): BoardShape => {
  for (let i = 0; i < board.length; i += BOARD_WIDTH) {
    const row = board.slice(i, i + BOARD_WIDTH)
    if (row.every((cell) => cell !== Block.EMPTY)) {
      board.splice(i, BOARD_WIDTH)
      board.unshift(...getEmptyLine())
    }
  }
  return board
}
