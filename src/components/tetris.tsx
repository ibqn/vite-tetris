import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { CurrentScore } from '@/components/current-score'
import { useTetris } from '@/hooks/use-tetris'
import { Button } from '@/components/button'
import { GameState } from '@/types'

export const Tetris = () => {
  const { board, upcomingBlocks, gameState, score, startGame, pauseGame, resumeGame } = useTetris()

  const handleClick = () => {
    if (gameState === GameState.RUNNING) {
      return pauseGame()
    }
    if (gameState === GameState.PAUSED) {
      return resumeGame()
    }
    if (gameState === GameState.GAME_OVER) {
      return startGame()
    }
  }

  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board board={board} />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        <CurrentScore score={score} />

        <div className="flex">
          <Button onClick={handleClick} className="flex-1">
            {gameState === GameState.RUNNING && 'pause'}
            {gameState === GameState.PAUSED && 'resume'}
            {gameState === GameState.GAME_OVER && 'start'}
          </Button>
        </div>
      </div>
    </div>
  )
}
