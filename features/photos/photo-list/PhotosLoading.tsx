export function PhotosLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="h-[80px] bg-gray-200 animate-pulse rounded-lg"
        />
      ))}
    </div>
  )
}
