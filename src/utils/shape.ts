import { type BlockVariant, shapes } from '@/types'

export const getShape = (blockVariant: BlockVariant) => shapes[blockVariant.block].shapes[blockVariant.shapeIndex]
