import { Column } from 'components/Flex'
import { SoundListItem } from 'components/SoundListItem'
import { SOUNDS } from 'sounds'

export default function HomePage() {
  return (
    <Column>
      {SOUNDS.map((sound) => (
        <SoundListItem key={sound.id} sound={sound} />
      ))}
    </Column>
  )
}
