import { BlockNoEmpty, shapes } from '@/types'
import { Cell } from './cell'

type Props = {
  blocks: BlockNoEmpty[]
}

export const UpcomingBlocks = ({ blocks }: Props) => {
  const [currentBlock] = blocks
  const shape = shapes[currentBlock].shapes[0]

  return (
    <div className="shadow-glow flex flex-1 flex-col items-center gap-4 bg-black/70 px-2 py-4">
      <div className="uppercase">next</div>
      <div className="flex flex-row gap-px">
        {shape.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-px">
            {row.map((block, colIndex) => (
              <Cell key={colIndex} block={block} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
