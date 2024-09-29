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

export type ShapesObject = {
  [key in BlockNoEmpty]: {
    shapes: BlockShape[]
  }
}

export const shapes: ShapesObject = {
  [Block.I]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.I, Block.I, Block.I],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.I, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.I, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.I, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.I, Block.EMPTY],
      ],
    ],
  },
  [Block.J]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.J],
      ],
      [
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.J, Block.J, Block.EMPTY],
      ],
      [
        [Block.J, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.J, Block.J],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
      ],
    ],
  },
  [Block.L]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.L, Block.L, Block.L],
        [Block.L, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.L, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.L],
        [Block.L, Block.L, Block.L],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.L],
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
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.S, Block.EMPTY],
        [Block.EMPTY, Block.S, Block.S],
        [Block.EMPTY, Block.EMPTY, Block.S],
      ],
    ],
  },
  [Block.T]: {
    shapes: [
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
    ],
  },
  [Block.Z]: {
    shapes: [
      [
        [Block.Z, Block.Z, Block.EMPTY],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.Z],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.Z, Block.EMPTY],
      ],
    ],
  },
}

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export const BOARD_SIZE = BOARD_WIDTH * BOARD_HEIGHT
