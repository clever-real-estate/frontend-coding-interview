'use client'

import { PhotoList } from '@/features/photos/photo-list/PhotoList'
import { Photo } from '@/features/photos/photo-list/types'
import { useSuspenseQuery } from '@tanstack/react-query'

export function PhotosContent() {
  const { data } = useSuspenseQuery<{
    next_page: string
    page: number
    per_page: number
    photos: Photo[]
    total_results: number
  }>({
    queryKey: ['photos'],
    queryFn: () => fetch('/api/photos').then(r => r.json()),
  })

  return <PhotoList photos={data.photos} />
}
