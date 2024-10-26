import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { getRandomBlock } from '@/utils/random-block'
import { CurrentScore } from '@/components/current-score'
import { useTetris } from '@/hooks/use-tetris'
import { Block } from '@/types'

export const Tetris = () => {
  const { board } = useTetris()
  board[199] = Block.I
  board[198] = Block.I
  board[197] = Block.J
  board[186] = Block.J
  board[196] = Block.L
  board[188] = Block.O

  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board board={board} />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks blocks={[getRandomBlock()]} />
        <CurrentScore score={0} />
      </div>
    </div>
  )
}
