import { Header } from '@/features/site/header/Header'
import { ReactNode } from 'react'

export default function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="max-w-[532px] mx-auto px-4">
        <Header />
      </div>
      {children}
    </>
  )
}
