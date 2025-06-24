import { PrimaryButton } from 'components/Button'
import Centerer from 'components/Centerer'
import { Column } from 'components/Flex'
import { useAudio } from 'hooks/useAudio'
import { useCallback } from 'react'
import { styled } from 'styled-components'
import { ThemedText } from 'theme/components'

const Container = styled(Centerer)`
  padding: 32px;
  margin: 0 auto;
`

export default function IntroPage() {
  // audio
  const { loadAudio, isLoading, loadingProgress, loadedFiles } = useAudio()

  // start music
  const startMusic = useCallback(() => {
    loadAudio()
  }, [loadAudio])

  return (
    <Container>
      <Column gap={32}>
        {isLoading ? (
          <Column gap={16}>
            <ThemedText.Body>Loading... ({loadingProgress})</ThemedText.Body>
            {loadedFiles.length > 0 && (
              <ThemedText.Body textAlign="center" fontSize={24}>
                Last loaded: {loadedFiles[loadedFiles.length - 1]}
              </ThemedText.Body>
            )}
          </Column>
        ) : (
          <>
            <ThemedText.Body>Please load the audio files.</ThemedText.Body>
            <PrimaryButton onClick={startMusic}>LOAD AUDIO</PrimaryButton>
          </>
        )}
      </Column>
    </Container>
  )
}
