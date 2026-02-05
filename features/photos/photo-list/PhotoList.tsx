import { FC } from 'react'
import { Photo } from './types'
import { PhotoItem } from './PhotoItem'
import { LikesRecord } from './PhotosContext'

export const PhotoList: FC<{
  likes: LikesRecord
  photos: Photo[]
  onToggleLike: (id: string) => void
}> = ({ likes, photos, onToggleLike }) => {
  return photos.map(photo => {
    return (
      <div className="pb-3" key={photo.id}>
        <PhotoItem
          onToggleLike={onToggleLike}
          id={photo.id}
          isLiked={
            Object.hasOwn(likes, photo.id) ? likes[photo.id] : photo.liked
          }
          src={photo.src.small}
          photographer={photo.photographer}
          photographerUrl={photo.photographer_url}
          alt={photo.alt}
          avgColor={photo.avg_color}
        />
      </div>
    )
  })
}
