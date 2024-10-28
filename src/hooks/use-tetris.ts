import { StateAction, State, GameState, Block, BOARD_WIDTH } from '@/types'
import { getEmptyBoard } from '@/utils/empty-board'
import { getRandomBlock } from '@/utils/random-block'
import { getShape } from '@/utils/shape'
import { useReducer } from 'react'
import { useInterval } from '@/hooks/use-interval'

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
        currentBlock,
        currentBlockX: Math.floor((BOARD_WIDTH - currentShape[0].length) / 2),
        upcomingBlocks: [getRandomBlock(), getRandomBlock()],
        gameState: GameState.RUNNING,
      }
    }
    case 'drop': {
      return {
        ...state,
        currentBlockY: state.currentBlockY + 1,
      }
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
    case 'game-over':
      return {
        ...state,
        gameState: GameState.GAME_OVER,
      }
    case 'clear-line':
      return {
        ...state,
        score: state.score + 100,
      }
    case 'update-board':
      return {
        ...state,
        board: action.board,
      }
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

  const gameTick = () => {
    dispatchState({ type: 'drop' })
    console.log('game tick')
  }

  useInterval(gameTick, state.gameState === GameState.RUNNING ? 800 : null)

  const currentShape = getShape(state.currentBlock)
  const currentBoard = state.board.slice()
  currentShape.forEach((row, rowIndex) => {
    row.forEach((block, colIndex) => {
      if (block !== Block.EMPTY) {
        currentBoard[state.currentBlockX + colIndex + (state.currentBlockY + rowIndex) * BOARD_WIDTH] = block
      }
    })
  })

  currentBoard[180] = Block.I
  currentBoard[190] = Block.I
  currentBoard[199] = Block.I
  currentBoard[198] = Block.I
  currentBoard[197] = Block.J
  currentBoard[186] = Block.J
  currentBoard[196] = Block.L
  currentBoard[188] = Block.O

  return { ...state, board: currentBoard, startGame, pauseGame, resumeGame }
}
