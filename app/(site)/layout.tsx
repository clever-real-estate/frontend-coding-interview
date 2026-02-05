import { PhotosProvider } from '@/features/photos/photo-list/PhotosContext'
import { Header } from '@/features/site/header/Header'
import { ReactNode } from 'react'

export default function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <PhotosProvider>
      <div className="max-w-[532px] mx-auto px-[35px]">
        <Header />
      </div>
      {children}
    </PhotosProvider>
  )
}
