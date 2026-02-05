import { useQuery } from '@tanstack/react-query'
import { Photo } from '../types'

export const usePhotosQuery = () => {
  return useQuery<{
    next_page: string
    page: number
    per_page: number
    photos: Photo[]
    total_results: number
  }>({
    queryKey: ['photos'],
    queryFn: () => fetch('/api/photos').then(r => r.json()),
  })
}
