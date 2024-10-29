import { BlockVariant, shapes } from '@/types'

export const rotateBlock = (blockVariant: BlockVariant): BlockVariant => {
  const shapeIndex = (blockVariant.shapeIndex + 1) % shapes[blockVariant.block].shapes.length

  return { ...blockVariant, shapeIndex }
}
