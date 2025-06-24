import { PrimaryButton } from 'components/Button'
import { Column, Row } from 'components/Flex'
import { useAudio } from 'hooks/useAudio'
import { Sound } from 'sounds'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'

const Container = styled(Row)`
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.neutral3};
  gap: 16px;
  width: 100%;
  max-width: 500px;
`

const FileId = styled(ThemedText.Body)`
  font-size: 32px;
  min-width: 40px;
  text-align: center;
  color: ${({ theme }) => theme.accent1};
  font-weight: bold;
`

const SongInfo = styled(Column)`
  flex: 1;
  gap: 4px;
  align-items: flex-start;
  min-width: 0;
  flex-shrink: 1;
`

const SongName = styled(ThemedText.Body)`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`

const Artist = styled(ThemedText.Body)`
  font-size: 16px !important;
  line-height: 1.2;
  color: ${({ theme }) => theme.neutral2};
  width: 100%;
`

const PlayButton = styled(PrimaryButton)`
  font-size: 16px;
  padding: 8px 12px;
  min-width: 80px;
`

export function SoundListItem({ sound }: { sound: Sound }) {
  const { playSound, currentSoundId, isCurrentSoundPlaying } = useAudio()
  const isCurrentSound = currentSoundId === sound.id
  const isPlaying = isCurrentSound && isCurrentSoundPlaying

  return (
    <Container>
      <FileId>{sound.fileId.padStart(2, '0')}</FileId>
      <SongInfo>
        <SongName>{sound.songName}</SongName>
        <Artist>{sound.artist ?? 'Unknown'}</Artist>
      </SongInfo>
      <PlayButton onClick={() => playSound(sound.id)}>{isPlaying ? 'PAUSE' : 'PLAY'}</PlayButton>
    </Container>
  )
}
