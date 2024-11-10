import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { CurrentScore } from '@/components/current-score'
import { useTetris } from '@/hooks/use-tetris'
import { Button } from '@/components/button'
import { ArrowButton } from '@/components/arrow-button'
import { GameState } from '@/types'
import { useRef } from 'react'

export const Tetris = () => {
  const {
    board,
    upcomingBlocks,
    gameState,
    score,
    startGame,
    pauseGame,
    resumeGame,
    moveLeft,
    moveRight,
    rotate,
    moveDown,
  } = useTetris()

  const boardRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (gameState === GameState.RUNNING) {
      pauseGame()
    }
    if (gameState === GameState.PAUSED) {
      resumeGame()
    }
    if (gameState === GameState.GAME_OVER) {
      startGame()
    }

    setTimeout(() => {
      boardRef.current?.focus()
    }, 0)
  }

  const handleControl = (callback: () => void) => () => {
    if (gameState !== GameState.RUNNING) {
      return
    }
    callback()

    setTimeout(() => {
      boardRef.current?.focus()
    }, 0)
  }

  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board ref={boardRef} board={board} gameState={gameState} />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        <CurrentScore score={score} />

        <div className="flex flex-col">
          <Button onClick={handleClick} className="flex-1">
            {gameState === GameState.RUNNING && 'pause'}
            {gameState === GameState.PAUSED && 'resume'}
            {gameState === GameState.GAME_OVER && 'start'}
          </Button>
        </div>

        <div className="grid grid-cols-3 grid-rows-3">
          <ArrowButton className="col-start-2" onClick={handleControl(rotate)} />
          <ArrowButton className="row-start-2 -rotate-90" onClick={handleControl(moveLeft)} />
          <ArrowButton className="col-start-3 row-start-2 rotate-90" onClick={handleControl(moveRight)} />
          <ArrowButton className="col-start-2 row-start-3 rotate-180" onClick={handleControl(moveDown)} />
        </div>
      </div>
    </div>
  )
}
