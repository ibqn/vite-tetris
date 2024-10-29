import { Block, BOARD_SIZE, BOARD_WIDTH, BoardShape } from '@/types'

export const getEmptyBoard = (): BoardShape => Array.from<Block>({ length: BOARD_SIZE }).fill(Block.EMPTY)

export const getEmptyLine = (): BoardShape => Array.from<Block>({ length: BOARD_WIDTH }).fill(Block.EMPTY)
