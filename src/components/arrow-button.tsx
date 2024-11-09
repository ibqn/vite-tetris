import { Arrow } from './arrow'
import { Button } from './button'

type Props = React.ComponentProps<'button'>

export const ArrowButton = (props: Props) => (
  <Button {...props}>
    <Arrow className="size-6" />
  </Button>
)
