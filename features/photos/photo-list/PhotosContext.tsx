'use client' 

import {
  createContext,
  FC,
  ReactNode,
  use,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { Photo } from './types'

export type PhotosContextValue = {
  likes: Record<string, boolean>
  toggleLike(id: string): void
  setLikes: (photos: Photo[]) => void
}

export const PhotosContext = createContext<PhotosContextValue | null>(null)

export const usePhotosContext = () => {
  const context = use(PhotosContext)

  if (context == null)
    throw new Error('usePhotosContext must be used within a PhotosProvider')

  return context
}

export type LikesRecord = Record<string, boolean>

export const PhotosProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [likes, updateLikes] = useState<LikesRecord>({})
  const toggleLike = useCallback((id: string) => {
    updateLikes(record => {
      return {
        ...record,
        [id]: !record[id],
      }
    })
  }, [])

  const setLikes = useCallback((photos: Photo[]) => {
    const map = photos.reduce((map, photo) => {
      map[photo.id] = photo.liked

      return map
    }, {} as LikesRecord)

    updateLikes(record => {
      return { ...record, ...map }
    })
  }, [])

  const value = useMemo((): PhotosContextValue => {
    return {
      setLikes,
      likes,
      toggleLike,
    }
  }, [likes, setLikes, toggleLike])

  return (
    <PhotosContext.Provider value={value}>{children}</PhotosContext.Provider>
  )
}
