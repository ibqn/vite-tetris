import { Block, GameState } from '@/types'
import { Cell } from '@/components/cell'
import { ComponentProps, forwardRef } from 'react'
import { Label } from '@/components/label'

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
        <Label className="absolute left-0 right-0 top-1/2 -translate-y-1/2">paused</Label>
      )}

      {gameState === GameState.GAME_OVER && (
        <Label className="absolute left-0 right-0 top-1/2 -translate-y-1/2">game over</Label>
      )}
    </div>
  )
})
