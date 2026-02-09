'use client'

import { usePhotosQuery } from '@/features/photos/photo-list/hooks/usePhotosQuery'
import { PhotoList } from '@/features/photos/photo-list/PhotoList'
import { usePhotosContext } from '@/features/photos/photo-list/PhotosContext'
import { PhotosLoading } from '@/features/photos/photo-list/PhotosLoading'
import { useEffect } from 'react'

export default function Home() {
  const { isLoading, error, data } = usePhotosQuery()
  const { likes, setLikes, toggleLike } = usePhotosContext()

  useEffect(() => {
    if (data) {
      setLikes(data.photos)
    }
  }, [data, setLikes])

  return (
    <main>
      <div className="max-w-[532px] mx-auto px-[35px]">
        <h1 className="font-bold text-[20px] pb-[39px]">All photos</h1>

        {isLoading && <PhotosLoading />}
        {error && <p>{`We couldn't load this, please refresh the page`}</p>}
        {data && (
          <PhotoList
            likes={likes}
            onToggleLike={toggleLike}
            photos={data.photos}
          />
        )}

        <div className="pb-30" />
      </div>
    </main>
  )
}
