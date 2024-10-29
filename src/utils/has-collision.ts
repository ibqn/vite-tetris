import { Block, BOARD_HEIGHT, BOARD_WIDTH, State } from '@/types'
import { getShape } from '@/utils/shape'
import { rotateBlock } from './rotate-block'

export const hasCollision = (state: State, { x = 0, y = 0, rotation = false } = {}): boolean => {
  const currentShape = getShape(rotation ? rotateBlock(state.currentBlock) : state.currentBlock)
  const currentBoard = state.board

  for (let rowIndex = 0; rowIndex < currentShape.length; rowIndex++) {
    for (let colIndex = 0; colIndex < currentShape[rowIndex].length; colIndex++) {
      if (currentShape[rowIndex][colIndex] !== Block.EMPTY) {
        if (state.currentBlockX + colIndex + x < 0) {
          return true
        }

        if (state.currentBlockX + colIndex + x >= BOARD_WIDTH) {
          return true
        }

        if (state.currentBlockY + rowIndex + y >= BOARD_HEIGHT) {
          return true
        }

        if (state.currentBlockY + rowIndex + y < 0) {
          return true
        }

        if (
          currentBoard[state.currentBlockX + colIndex + x + (state.currentBlockY + rowIndex + y) * BOARD_WIDTH] !==
          Block.EMPTY
        ) {
          return true
        }
      }
    }
  }

  return false
}
