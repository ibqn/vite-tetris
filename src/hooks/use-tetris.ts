import { StateAction, State, GameState, Block } from '@/types'
import { getEmptyBoard } from '@/utils/empty-board'
import { getRandomBlock } from '@/utils/random-block'
import { useReducer } from 'react'

const initialState: State = {
  board: getEmptyBoard(),
  currentBlock: Block.I,
  currentBlockShapeIndex: 0,
  upcomingBlocks: [Block.J, Block.L],
  currentBlockX: 0,
  currentBlockY: 3,
  score: 0,
  gameState: GameState.GAME_OVER,
}

const stateReducer = (state: State, action: StateAction): State => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        currentBlock: getRandomBlock(),
        upcomingBlocks: [getRandomBlock(), getRandomBlock()],
        gameState: GameState.RUNNING,
      }
    case 'pause':
      return {
        ...state,
        gameState: GameState.PAUSED,
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
  }))

  const startGame = () => dispatchState({ type: 'start' })
  return { ...state, startGame }
}
