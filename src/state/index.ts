import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { AudioSlice, createAudioSlice } from './audio'

export type StoreState = AudioSlice

const PERSISTING_KEYS: (keyof StoreState)[] = []

export const useBoundStore = create<StoreState>()(
  persist(
    immer<StoreState>((...a) => ({
      ...createAudioSlice(...a),
    })),
    {
      name: 'heloise133-state-storage',
      partialize: (state: StoreState) =>
        PERSISTING_KEYS.reduce<StoreState>((acc, key) => {
          ;(acc as any)[key] = state[key]
          return acc
        }, {} as StoreState),
    }
  )
)
