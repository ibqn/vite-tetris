import { ClearedLine } from '@/types'

export const getPoints = (clearedLine: ClearedLine) => {
  const pointsMap = { 1: 1, 2: 3, 3: 5, 4: 8 } as const
  return pointsMap[clearedLine] * 100
}
