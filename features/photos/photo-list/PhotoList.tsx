import { FC } from 'react'
import { Photo } from './types'
import { PhotoItem } from './PhotoItem'

export const PhotoList: FC<{
  photos: Photo[]
  onToggleLike: (id: number) => void
}> = ({ photos, onToggleLike }) => {
  return photos.map(photo => {
    return (
      <div className="pb-3" key={photo.id}>
        <PhotoItem
          id={photo.id}
          isLiked={photo.liked}
          src={photo.src.small}
          photographer={photo.photographer}
          photographerUrl={photo.photographer_url}
          alt={photo.alt}
          avgColor={photo.avg_color}
          onToggleLike={onToggleLike}
        />
      </div>
    )
  })
}
