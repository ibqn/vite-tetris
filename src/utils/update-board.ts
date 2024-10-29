import { Block, BOARD_WIDTH, State } from '@/types'
import { getShape } from '@/utils/shape'

export const updateBoard = (state: State): State => {
  const currentShape = getShape(state.currentBlock)
  const currentBoard = state.board.slice()
  currentShape.forEach((row, rowIndex) => {
    row.forEach((block, colIndex) => {
      if (block !== Block.EMPTY) {
        currentBoard[state.currentBlockX + colIndex + (state.currentBlockY + rowIndex) * BOARD_WIDTH] = block
      }
    })
  })

  return {
    ...state,
    board: currentBoard,
  }
}
