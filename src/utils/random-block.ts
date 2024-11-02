import { shapesObject } from '@/consts'
import { Block, BlockVariant } from '@/types'

export const getRandomBlock = (): BlockVariant => {
  const blocks = Object.values(Block).filter((key) => key !== Block.EMPTY)
  const randomIndex = Math.floor(Math.random() * blocks.length)

  const randomBlock = blocks[randomIndex]
  const randomShapeIndex = Math.floor(Math.random() * shapesObject[randomBlock].shapes.length)

  return { block: randomBlock, shapeIndex: randomShapeIndex }
}
