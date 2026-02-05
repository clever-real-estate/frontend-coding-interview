import { PhotosProvider } from '@/features/photos/photo-list/PhotosContext'
import { Header } from '@/features/site/header/Header'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Photos',
}

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
