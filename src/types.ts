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

export const shapes: ShapesObject = {
  [Block.I]: {
    shapes: [[[Block.I, Block.I, Block.I, Block.I]], [[Block.I], [Block.I], [Block.I], [Block.I]]],
  },
  [Block.J]: {
    shapes: [
      [
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.J],
      ],
      [
        [Block.EMPTY, Block.J],
        [Block.EMPTY, Block.J],
        [Block.J, Block.J],
      ],
      [
        [Block.J, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
      ],
      [
        [Block.J, Block.J],
        [Block.J, Block.EMPTY],
        [Block.J, Block.EMPTY],
      ],
    ],
  },
  [Block.L]: {
    shapes: [
      [
        [Block.L, Block.L, Block.L],
        [Block.L, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.L, Block.L],
        [Block.EMPTY, Block.L],
        [Block.EMPTY, Block.L],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.L],
        [Block.L, Block.L, Block.L],
      ],
      [
        [Block.L, Block.EMPTY],
        [Block.L, Block.EMPTY],
        [Block.L, Block.L],
      ],
    ],
  },
  [Block.O]: {
    shapes: [
      [
        [Block.O, Block.O],
        [Block.O, Block.O],
      ],
    ],
  },
  [Block.S]: {
    shapes: [
      [
        [Block.EMPTY, Block.S, Block.S],
        [Block.S, Block.S, Block.EMPTY],
      ],
      [
        [Block.S, Block.EMPTY],
        [Block.S, Block.S],
        [Block.EMPTY, Block.S],
      ],
    ],
  },
  [Block.T]: {
    shapes: [
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.T],
      ],
      [
        [Block.T, Block.EMPTY],
        [Block.T, Block.T],
        [Block.T, Block.EMPTY],
      ],
      [
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.T],
        [Block.T, Block.T],
        [Block.EMPTY, Block.T],
      ],
    ],
  },
  [Block.Z]: {
    shapes: [
      [
        [Block.Z, Block.Z, Block.EMPTY],
        [Block.EMPTY, Block.Z, Block.Z],
      ],
      [
        [Block.EMPTY, Block.Z],
        [Block.Z, Block.Z],
        [Block.Z, Block.EMPTY],
      ],
    ],
  },
}

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export const BOARD_SIZE = BOARD_WIDTH * BOARD_HEIGHT

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
  | { type: 'game-over' }
  | { type: 'clear-line' }
  | {
      type: 'update-board'
      board: BoardShape
    }

export const GameState = {
  RUNNING: 'running',
  PAUSED: 'paused',
  GAME_OVER: 'game-over',
} as const

export type GameState = (typeof GameState)[keyof typeof GameState]
