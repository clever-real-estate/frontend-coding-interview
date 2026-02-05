import { Suspense } from 'react'
import { PhotosContent } from '../../features/photos/photo-list/PhotosContent'
import { PhotosLoading } from '../../features/photos/photo-list/PhotosLoading'

export default function Home() {
  return (
    <main>
      <div className="w-[532px] mx-auto px-4">
        <h1 className="font-bold text-[20px] pb-[35px]">All photos</h1>

        <Suspense fallback={<PhotosLoading />}>
          <PhotosContent />
        </Suspense>

        <div className="pb-30" />
      </div>
    </main>
  )
}
