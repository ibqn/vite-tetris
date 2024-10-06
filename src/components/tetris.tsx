import { Board } from '@/components/board'
import { UpcomingBlocks } from '@/components/upcoming-blocks'
import { randomBlock } from '@/utils/random-block'
import { CurrentScore } from '@/components/current-score'

type Props = {}

export const Tetris = (props: Props) => {
  return (
    <div className="flex flex-row gap-x-4 text-white">
      <Board />
      <div className="flex min-w-36 flex-col gap-8">
        <UpcomingBlocks blocks={[randomBlock()]} />
        <CurrentScore score={0} />
      </div>
    </div>
  )
}
