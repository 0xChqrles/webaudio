import { useAudio } from 'hooks/useAudio'
import AudioPage from 'pages/Audio'
import HomePage from 'pages/Home'

export function Root() {
  const { isAudioLoaded } = useAudio()

  console.log('Root component rendering:', { isAudioLoaded })

  return isAudioLoaded ? <HomePage /> : <AudioPage />
}
