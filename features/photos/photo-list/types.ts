export type Photo = {
  id: string
  photographer: string
  photographer_url: string
  liked: boolean
  src: {
    original: string
    small: string
  }
  alt: string
  avg_color: string
}
