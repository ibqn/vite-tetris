import { shapesObject } from '@/consts'
import type { BlockShape, BlockVariant } from '@/types'

export const getShape = (blockVariant: BlockVariant): BlockShape =>
  shapesObject[blockVariant.block].shapes[blockVariant.shapeIndex]
