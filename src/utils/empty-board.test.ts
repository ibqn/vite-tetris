import { expect, test } from 'vitest'
import { getEmptyLine } from '@/utils/empty-board'
import { BOARD_WIDTH } from '@/consts'
import { Block } from '@/types'

test('Should create an empty line', () => {
  const emptyLine = getEmptyLine()
  expect(emptyLine.length).toBe(BOARD_WIDTH)

  const isEmpty = emptyLine.every((cell) => cell === Block.EMPTY)
  expect(isEmpty).toBe(true)
})
