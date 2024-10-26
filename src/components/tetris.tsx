import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { CurrentScore } from '@/components/current-score'
import { useTetris } from '@/hooks/use-tetris'
import { Block } from '@/types'
import { Button } from '@/components/button'

export const Tetris = () => {
  const { board, upcomingBlocks, startGame } = useTetris()

  board[199] = Block.I
  board[198] = Block.I
  board[197] = Block.J
  board[186] = Block.J
  board[196] = Block.L
  board[188] = Block.O

  const handleStart = () => {
    startGame()
  }

  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board board={board} />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        <CurrentScore score={0} />

        <div>
          <Button onClick={handleStart}>start</Button>
        </div>
      </div>
    </div>
  )
}
