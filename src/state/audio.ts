import { StateCreator } from 'zustand'

import { StoreState } from './index'

export type AudioSlice = State & Actions

// TYPES

export type Sounds = Record<string, Howl>

// STATE

interface State {
  sounds: Sounds | null
  currentSound: Howl | null
  currentSoundId: string | null
  loadedCount: number
}

interface Actions {
  setCurrentSound: (soundId: string) => Howl | null
  loadSounds: (sounds: Sounds) => void
  increaseLoadedCount: () => void
}

export const createAudioSlice: StateCreator<StoreState, [['zustand/immer', never]], [], AudioSlice> = (set, get) => ({
  sounds: null,
  currentSound: null,
  currentSoundId: null,
  loadedCount: 0,

  setCurrentSound: (soundId: string) => {
    const sound = get().sounds?.[soundId] ?? null

    set({
      currentSound: sound,
      currentSoundId: sound ? soundId : null, // put null if the sound has not been found
    })

    return sound
  },
  loadSounds: (sounds: Sounds) => set({ sounds }),
  increaseLoadedCount: () => set((state) => ({ loadedCount: state.loadedCount + 1 })),
})
