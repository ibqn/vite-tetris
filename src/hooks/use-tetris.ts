import { StateAction, State, GameState, Block, BlockVariant } from '@/types'
import { getEmptyBoard } from '@/utils/empty-board'
import { getRandomBlock } from '@/utils/random-block'
import { getShape } from '@/utils/get-shape'
import { useCallback, useEffect, useReducer } from 'react'
import { useInterval } from '@/hooks/use-interval'
import { rotateBlock } from '@/utils/rotate-block'
import { hasCollision } from '@/utils/has-collision'
import { updateBoard } from '@/utils/update-board'
import { clearLines } from '@/utils/clear-lines'
import { fallDown } from '@/utils/fall-down'
import { dropDown } from '@/utils/drop-down'
import { BOARD_WIDTH } from '@/consts'

const initialState: State = {
  board: getEmptyBoard(),
  currentBlock: { block: Block.I, shapeIndex: 0 },
  currentBlockShapeIndex: 0,
  upcomingBlocks: [{ block: Block.I, shapeIndex: 0 }],
  currentBlockX: 4,
  currentBlockY: 0,
  score: 0,
  gameState: GameState.GAME_OVER,
}

const stateReducer = (state: State, action: StateAction): State => {
  switch (action.type) {
    case 'start': {
      const currentBlock = getRandomBlock()
      const currentShape = getShape(currentBlock)
      return {
        ...state,
        board: getEmptyBoard(),
        currentBlock,
        currentBlockX: Math.floor((BOARD_WIDTH - currentShape[0].length) / 2),
        currentBlockY: 0,
        upcomingBlocks: [getRandomBlock(), getRandomBlock()],
        gameState: GameState.RUNNING,
      }
    }
    case 'drop': {
      return { ...dropDown(state) }
    }
    case 'pause':
      return {
        ...state,
        gameState: GameState.PAUSED,
      }
    case 'resume':
      return {
        ...state,
        gameState: GameState.RUNNING,
      }
    case 'rotate':
      return {
        ...state,
        currentBlock: rotateBlock(state.currentBlock),
      }
    case 'move-left':
      return {
        ...state,
        currentBlockX: state.currentBlockX - 1,
      }
    case 'move-right':
      return {
        ...state,
        currentBlockX: state.currentBlockX + 1,
      }
    case 'game-over':
      return {
        ...state,
        gameState: GameState.GAME_OVER,
      }
    case 'commit': {
      const newState = updateBoard(state)
      const upcomingBlocks = state.upcomingBlocks.slice()
      const currentBlock = upcomingBlocks.shift() as BlockVariant
      const currentShape = getShape(currentBlock)
      upcomingBlocks.push(getRandomBlock())
      return {
        ...newState,
        currentBlock,
        upcomingBlocks,
        currentBlockY: 0,
        currentBlockX: Math.floor((BOARD_WIDTH - currentShape[0].length) / 2),
      }
    }
    case 'clear-lines':
      return {
        ...state,
        board: clearLines(state.board.slice()),
      }
    case 'fall':
      return { ...fallDown(state) }
    default:
      throw new Error('Invalid action')
  }
}

export const useTetris = () => {
  const [state, dispatchState] = useReducer(stateReducer, initialState, (emptyState) => ({
    ...emptyState,
    currentBlock: getRandomBlock(),
    upcomingBlocks: [getRandomBlock(), getRandomBlock()],
  }))

  const startGame = () => dispatchState({ type: 'start' })
  const pauseGame = () => dispatchState({ type: 'pause' })
  const resumeGame = () => dispatchState({ type: 'resume' })

  const gameTick = useCallback(() => {
    console.log('game tick')
    if (state.gameState !== GameState.RUNNING) {
      return
    }

    if (hasCollision(state) && state.currentBlockY === 0) {
      dispatchState({ type: 'game-over' })
      return
    }

    if (hasCollision(state, { y: 1 })) {
      dispatchState({ type: 'commit' })
      dispatchState({ type: 'clear-lines' })
    } else {
      dispatchState({ type: 'drop' })
    }
  }, [state, dispatchState])

  useInterval(gameTick, state.gameState === GameState.RUNNING ? 800 : null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        if (hasCollision(state, { x: -1 })) {
          return
        }
        dispatchState({ type: 'move-left' })
      }
      if (event.key === 'ArrowRight') {
        if (hasCollision(state, { x: 1 })) {
          return
        }
        dispatchState({ type: 'move-right' })
      }
      if (event.key === 'ArrowDown') {
        dispatchState({ type: 'drop' })
      }
      if (event.key === ' ' || event.key === 'd') {
        dispatchState({ type: 'fall' })
      }
      if (event.key === 'ArrowUp') {
        if (hasCollision(state, { rotation: true })) {
          return
        }
        dispatchState({ type: 'rotate' })
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [state, dispatchState])

  const updatedState = updateBoard(state)

  return { ...updatedState, startGame, pauseGame, resumeGame }
}
