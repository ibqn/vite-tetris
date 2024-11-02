import { BOARD_SIZE, BOARD_WIDTH } from '@/consts'
import { Block, BoardShape } from '@/types'

export const getEmptyBoard = (): BoardShape => Array.from<Block>({ length: BOARD_SIZE }).fill(Block.EMPTY)

export const getEmptyLine = (): BoardShape => Array.from<Block>({ length: BOARD_WIDTH }).fill(Block.EMPTY)
