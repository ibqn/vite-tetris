import { Block, BOARD_SIZE, BoardShape } from '@/types'

export const getEmptyBoard = (): BoardShape => Array.from<Block>({ length: BOARD_SIZE }).fill(Block.EMPTY)
