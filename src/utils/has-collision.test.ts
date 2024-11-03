import { describe, test, expect } from 'vitest'
import { hasCollision } from '@/utils/has-collision'
import { Block, GameState, State } from '@/types'
import { getEmptyBoard } from '@/utils/empty-board'
import { BOARD_WIDTH } from '@/consts'
import { getShape } from '@/utils/get-shape'

describe('hasCollision', () => {
  const getMockState = (): State => ({
    board: getEmptyBoard(),
    currentBlock: { block: Block.I, shapeIndex: 0 },
    currentBlockShapeIndex: 0,
    upcomingBlocks: [],
    currentBlockX: 0,
    currentBlockY: 0,
    score: 0,
    gameState: GameState.RUNNING,
  })

  test('Should return false if block is in bounds', () => {
    const state = getMockState()
    const collision = hasCollision(state)
    expect(collision).toBe(false)
  })

  test('Should return true if x position of block will be out of left bounds', () => {
    const state = getMockState()
    const collision = hasCollision(state, { x: -1 })
    expect(collision).toBe(true)
  })

  test('Should return true if y position of block will be out of upper bounds', () => {
    const state = getMockState()
    const collision = hasCollision(state, { y: -1 })
    expect(collision).toBe(true)
  })

  test('Should return true if x position of block will be out of right bounds', () => {
    const state = getMockState()
    state.currentBlockX = BOARD_WIDTH - getShape(state.currentBlock)[0].length
    const collision = hasCollision(state, { x: 1 })
    expect(collision).toBe(true)
  })
})
