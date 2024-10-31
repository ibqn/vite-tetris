import { State } from '@/types'
import { hasCollision } from './has-collision'

export const dropDown = (state: State): State => {
  if (hasCollision(state, { y: 1 })) {
    return state
  }
  return { ...state, currentBlockY: state.currentBlockY + 1 }
}
