import { Block, BlockNoEmpty } from '@/types'

export const getRandomBlock = (): BlockNoEmpty => {
  const blocks = Object.values(Block).filter((key) => key !== Block.EMPTY)
  const randomIndex = Math.floor(Math.random() * blocks.length)

  const randomBlock = blocks[randomIndex]
  return randomBlock
}
