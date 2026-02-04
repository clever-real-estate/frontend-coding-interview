import { FC } from 'react'
import { Photo } from './types'
import { PhotoItem } from './PhotoItem'

export const PhotoList: FC<{ photos: Photo[] }> = ({ photos }) => {
  return photos.map(photo => {
    return (
      <div className="pb-3" key={photo.id}>
        <PhotoItem
          isLiked={photo.liked}
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
