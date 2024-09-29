import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { randomBlock } from '@/utils/random-block'

type Props = {}

export const Tetris = (props: Props) => {
  return (
    <div className="flex text-white">
      <div className="flex flex-row gap-x-4">
        <Board />
        <div className="flex min-w-36 flex-row">
          <UpcomingBlocks blocks={[randomBlock()]} />
        </div>
      </div>
    </div>
  )
}
