import { Howl } from 'howler'
import { useCallback, useMemo, useState } from 'react'
import { SOUNDS } from 'sounds'
import { useBoundStore } from 'state'
import { SoundMetadata, Sounds } from 'state/audio'
import { useShallow } from 'zustand/react/shallow'

export function useAudio() {
  const [hasStartedToLoad, setHasStartedToLoad] = useState(false)
  const [loadedFiles, setLoadedFiles] = useState<string[]>([])
  const [isCurrentSoundPlaying, setIsCurrentSoundPlaying] = useState(false)

  const {
    currentSound,
    currentSoundId,
    setCurrentSound,
    sounds,
    soundMetadata,
    loadSounds,
    loadSoundMetadata,
    loadedCount,
    increaseLoadedCount,
  } = useBoundStore(
    useShallow((state) => ({
      currentSound: state.currentSound,
      currentSoundId: state.currentSoundId,
      setCurrentSound: state.setCurrentSound,

      sounds: state.sounds,
      soundMetadata: state.soundMetadata,
      loadSounds: state.loadSounds,
      loadSoundMetadata: state.loadSoundMetadata,

      loadedCount: state.loadedCount,
      increaseLoadedCount: state.increaseLoadedCount,
    }))
  )

  const loadAudio = useCallback(() => {
    console.log('Starting to load audio files...')
    setHasStartedToLoad(true)

    if (!sounds) {
      console.log(
        `Loading ${SOUNDS.length} audio files:`,
        SOUNDS.map((s) => s.name)
      )

      // Load sound metadata
      const metadata: SoundMetadata = {}
      SOUNDS.forEach((sound) => {
        metadata[sound.id] = sound
      })
      loadSoundMetadata(metadata)

      loadSounds(
        SOUNDS.reduce<Sounds>((acc, sound) => {
          acc[sound.id] = new Howl({
            src: [sound.path],
            format: ['mp3'],
            onload: () => {
              console.log(`✅ Loaded: ${sound.name}`)
              setLoadedFiles((prev) => [...prev, sound.name])
              increaseLoadedCount()
            },
            onloaderror: (id, error) => {
              console.error(`❌ Failed to load: ${sound.name}`, error)
              increaseLoadedCount() // Still increment to avoid infinite loading
            },
          })
          return acc
        }, {} as Sounds)
      )
    }
  }, [increaseLoadedCount, loadSounds, loadSoundMetadata, sounds])

  // Function to play/pause sounds
  const playSound = useCallback(
    (soundId: string) => {
      const targetSound = sounds?.[soundId]
      if (!targetSound) return

      // Get the start time from metadata
      const startTime = soundMetadata?.[soundId]?.startTime ?? 0

      // If clicking the same sound that's currently playing
      if (soundId === currentSoundId && currentSound) {
        if (currentSound.playing()) {
          // Currently playing -> pause it
          console.log(`⏸️ Pausing: ${soundId}`)
          currentSound.pause()
          setIsCurrentSoundPlaying(false)
        } else {
          // Currently paused -> restart from custom start time
          console.log(`▶️ Restarting from ${startTime}s: ${soundId}`)
          currentSound.seek(startTime)
          currentSound.play()
          setIsCurrentSoundPlaying(true)
        }
        return
      }

      // Different sound -> stop current and play new one
      if (currentSound) {
        console.log(`⏹️ Stopping current sound`)
        currentSound.stop()
        setIsCurrentSoundPlaying(false)
      }

      console.log(`▶️ Playing from ${startTime}s: ${soundId}`)
      const newSound = setCurrentSound(soundId)
      if (newSound) {
        // Set up event listeners for the new sound
        newSound.on('play', () => {
          console.log(`🎵 Started playing: ${soundId}`)
          setIsCurrentSoundPlaying(true)
        })
        newSound.on('pause', () => {
          console.log(`⏸️ Paused: ${soundId}`)
          setIsCurrentSoundPlaying(false)
        })
        newSound.on('stop', () => {
          console.log(`⏹️ Stopped: ${soundId}`)
          setIsCurrentSoundPlaying(false)
        })
        newSound.on('end', () => {
          console.log(`🏁 Ended: ${soundId}`)
          setIsCurrentSoundPlaying(false)
        })

        // Start from the custom start time
        newSound.seek(startTime)
        newSound.play()
      }
    },
    [currentSound, currentSoundId, setCurrentSound, sounds, soundMetadata]
  )

  // is loaded
  const isAudioLoaded = useMemo(() => {
    const loaded = loadedCount === SOUNDS.length
    console.log(`🔍 Audio loading check:`, {
      loadedCount,
      totalSounds: SOUNDS.length,
      isAudioLoaded: loaded,
      hasStartedToLoad,
    })
    return loaded
  }, [loadedCount, hasStartedToLoad])

  // is loading
  const isLoading = useMemo(() => hasStartedToLoad && !isAudioLoaded, [hasStartedToLoad, isAudioLoaded])

  return {
    playSound,
    loadAudio,
    isAudioLoaded,
    isLoading,
    currentSoundId,
    currentSound,
    isCurrentSoundPlaying,
    loadedFiles,
    loadingProgress: `${loadedCount}/${SOUNDS.length}`,
  }
}
