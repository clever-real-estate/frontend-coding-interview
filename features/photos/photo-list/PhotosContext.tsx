import { createContext, useMemo } from 'react'
import { Photo } from './types'


export type PhotosContextValue = {
  isLikePending: boolean
  photos: Photo[]
  
}

export const PhotosContext = createContext<PhotosContextValue | null>(null)

const usePhotosContext = () => {
  if (context == null) throw new Error('')
  return 
}

export const PhotosProvider = ({ }) => {
  const value = useMemo(() => {}, [])
  return <PhotosContext.Provider value={value}>{children}</PhotosContext.Provider>
}