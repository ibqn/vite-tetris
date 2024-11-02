import { shapesObject } from '@/consts'
import { BlockVariant } from '@/types'

export const rotateBlock = (blockVariant: BlockVariant): BlockVariant => {
  const shapeIndex = (blockVariant.shapeIndex + 1) % shapesObject[blockVariant.block].shapes.length

  return { ...blockVariant, shapeIndex }
}
