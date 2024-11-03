type Props = {
  score: number
}

export const CurrentScore = ({ score }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 border border-white bg-black/70 px-2 py-4 shadow-glow">
      <div className="animate-pulsate uppercase text-white">score</div>
      <div>{score}</div>
    </div>
  )
}
