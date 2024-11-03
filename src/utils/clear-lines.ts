import { BOARD_WIDTH } from '@/consts'
import { Block, ClearedLine, State } from '@/types'
import { getEmptyLine } from '@/utils/empty-board'
import { getPoints } from '@/utils/get-points'

export const clearLines = (state: State): State => {
  const board = state.board.slice()
  let clearedLines = 0

  const applyScore = () => {
    if (clearedLines > 0) {
      state.linesStats[clearedLines as ClearedLine] += 1
      state.score += getPoints(clearedLines as ClearedLine)
    }
  }

  for (let i = 0; i < board.length; i += BOARD_WIDTH) {
    const row = board.slice(i, i + BOARD_WIDTH)
    if (row.every((cell) => cell !== Block.EMPTY)) {
      board.splice(i, BOARD_WIDTH)
      board.unshift(...getEmptyLine())
      clearedLines++
    } else {
      applyScore()
      clearedLines = 0
    }
  }
  applyScore()

  return { ...state, board }
}
