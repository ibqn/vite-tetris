import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { CurrentScore } from '@/components/current-score'
import { useTetris } from '@/hooks/use-tetris'
import { Button } from '@/components/button'

export const Tetris = () => {
  const { board, upcomingBlocks, startGame } = useTetris()

  const handleStart = () => {
    startGame()
  }

  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board board={board} />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        <CurrentScore score={0} />

        <div className="flex">
          <Button onClick={handleStart} className="flex-1">
            start
          </Button>
        </div>
      </div>
    </div>
  )
}
