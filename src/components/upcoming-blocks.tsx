import { BlockNoEmpty, shapes } from '@/types'
import { Cell } from '@/components/cell'

type Props = {
  blocks: BlockNoEmpty[]
}

export const UpcomingBlocks = ({ blocks }: Props) => {
  const [currentBlock] = blocks
  const shape = shapes[currentBlock].shapes[0]
  console.log('shape', shape)

  return (
    <div className="flex max-h-[200px] flex-1 flex-col items-center gap-4 border border-white bg-black/70 px-2 py-4 shadow-glow">
      <div className="uppercase">next</div>
      <div className="flex flex-col gap-px">
        {shape.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-px">
            {row.map((block, colIndex) => (
              <Cell key={colIndex} block={block} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
