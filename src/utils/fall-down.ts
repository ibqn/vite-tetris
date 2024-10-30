import { State } from '@/types'
import { hasCollision } from '@/utils/has-collision'

export const fallDown = (state: State): State => {
  while (!hasCollision(state, { y: 1 })) {
    state.currentBlockY++
  }
  return state
}
