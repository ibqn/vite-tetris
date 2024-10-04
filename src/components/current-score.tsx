type Props = {
  score: number
}

export const CurrentScore = ({ score }: Props) => {
  return (
    <div className="flex flex-col">
      <div>score</div>
      <div>{score}</div>
    </div>
  )
}
