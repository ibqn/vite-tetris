import { Block, GameState } from '@/types'
import { Cell } from '@/components/cell'
import { ComponentProps, forwardRef } from 'react'

type Props = {
  board: Block[]
  gameState: GameState
} & ComponentProps<'div'>

type Ref = HTMLDivElement

export const Board = forwardRef<Ref, Props>(({ board, gameState }, ref) => {
  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="relative grid grid-cols-10 gap-px border border-white bg-black/70 p-px shadow-glow"
    >
      {board.map((block, index) => (
        <Cell key={index} block={block} />
      ))}
      {gameState === GameState.PAUSED && (
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 animate-pulsate items-center justify-center bg-black/30 p-4 text-2xl uppercase text-white">
          paused
        </div>
      )}
    </div>
  )
})
