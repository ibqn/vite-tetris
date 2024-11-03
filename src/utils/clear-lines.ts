import { BOARD_WIDTH } from '@/consts'
import { Block, State } from '@/types'
import { getEmptyLine } from '@/utils/empty-board'

export const clearLines = (state: State): State => {
  const board = state.board.slice()
  for (let i = 0; i < board.length; i += BOARD_WIDTH) {
    const row = board.slice(i, i + BOARD_WIDTH)
    if (row.every((cell) => cell !== Block.EMPTY)) {
      board.splice(i, BOARD_WIDTH)
      board.unshift(...getEmptyLine())
    }
  }
  return { ...state, board }
}
