import { FC } from 'react'

export const PhotoItem: FC<{
  photographer: string
  alt: string
  src: string
  avgColor: string
  isLiked: boolean
  photographerUrl: string
}> = ({ photographer, src, alt, avgColor, photographerUrl, isLiked }) => {
  return (
    <div className="grid grid-cols-[31px_75px_minmax(0,1fr)_min-content] w-[500px]">
      <div className="">
        <button type="button" className="cursor-pointer">
          {isLiked ? (
            <img src="/star-filled.svg" alt="" className="w-[19px]" />
          ) : (
            <img src="/star-empty.svg" alt="" className="w-[19px]" />
          )}
        </button>
      </div>
      <div className="size-[75px] relative shrink-0">
        <img
          src={src}
          alt={alt}
          className="object-cover size-full absolute inset-0 rounded-[8px]"
        />
      </div>
      <div className="pl-3">
        <p className="text-[14px] font-bold flex justify-between">
          <span>{photographer}</span>
        </p>
        <p className="text-[14px] truncate w-full pr-2">{alt}</p>
        <div className="text-[14px] flex items-center">
          <p style={{ color: avgColor }}>{avgColor}</p>
          <div
            className="bg-skeleton size-3 ml-2"
            style={{
              backgroundColor: avgColor,
            }}
          />
        </div>
      </div>
      <div>
        <a
          className="flex gap-1"
          href={photographerUrl}
          target='_blank'
          rel="noopener noreferrer"
        >
          <img src="/links.svg" className="w-[12px] inline" alt="links" />{' '}
          <span className="text-link text-[12px]">Portfolio</span>
        </a>
      </div>
    </div>
  )
}
