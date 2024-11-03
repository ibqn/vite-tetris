export const Block = {
  EMPTY: 0,
  I: 'I',
  J: 'J',
  L: 'L',
  O: 'O',
  S: 'S',
  T: 'T',
  Z: 'Z',
} as const

export type Block = (typeof Block)[keyof typeof Block]

export type BoardShape = Block[]

export type BlockShape = Block[][]

export type BlockNoEmpty = Exclude<Block, typeof Block.EMPTY>

export type BlockVariant = {
  block: BlockNoEmpty
  shapeIndex: number
}

export type ShapesObject = {
  [key in BlockNoEmpty]: {
    shapes: BlockShape[]
  }
}

export type State = {
  board: BoardShape
  currentBlock: BlockVariant
  upcomingBlocks: BlockVariant[]
  currentBlockShapeIndex: number
  currentBlockX: number
  currentBlockY: number
  score: number
  gameState: GameState
}

export type StateAction =
  | { type: 'start' }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'rotate' }
  | { type: 'move-left' }
  | { type: 'move-right' }
  | { type: 'drop' }
  | { type: 'commit' }
  | { type: 'game-over' }
  | { type: 'clear-lines' }
  | { type: 'fall' }

export const GameState = {
  RUNNING: 'running',
  PAUSED: 'paused',
  GAME_OVER: 'game-over',
} as const

export type GameState = (typeof GameState)[keyof typeof GameState]

export type LinesStats = {
  [key in 1 | 2 | 3 | 4]: number
}
