import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PhotoItem } from './PhotoItem'

const defaultProps = {
  photographer: 'John Wick',
  alt: 'A day at the subway',
  src: 'http://google.com',
  avgColor: '#FF6347',
  isLiked: true,
  photographerUrl: 'http://google.com',
}

describe('PhotoItem', () => {
  it('should render without error', () => {
    render(<PhotoItem {...defaultProps} />)
    expect(screen.getByText('John Wick')).toBeInTheDocument()
  })

  it(`should show it's liked`, () => {
    render(<PhotoItem {...defaultProps} isLiked={true} />)

    const liked = screen.queryByAltText(/^liked/i)
    expect(liked).toBeInTheDocument()

    const unliked = screen.queryByAltText(/^unliked/i)
    expect(unliked).not.toBeInTheDocument()
  })

  it(`should show it hasn't been liked`, () => {
    render(<PhotoItem {...defaultProps} isLiked={false} />)

    const liked = screen.queryByAltText(/^liked/i)
    expect(liked).not.toBeInTheDocument()

    const unliked = screen.queryByAltText(/^unliked/i)
    expect(unliked).toBeInTheDocument()
  })
})
