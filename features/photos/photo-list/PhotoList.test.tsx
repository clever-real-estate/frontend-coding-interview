import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PhotoList } from './PhotoList'

const photo1 = {
  id: 1,
  photographer: 'John Wick',
  alt: 'A day at the subway',
  avg_color: '#FF6347',
  liked: true,
  photographer_url: 'http://google.com',
  src: {
    original: 'http://google.com',
    small: 'http://google.com',
  },
}

const photo2 = {
  ...photo1,
  id: 2,
  photographer: 'Caseoh',
  alt: 'Gaming with my people',
  avg_color: '#7A4EC8',
  liked: false,
}

describe('PhotoList', () => {
  it('should render without error', () => {
    render(<PhotoList photos={[photo1, photo2]} />)
    expect(screen.getByText('John Wick')).toBeInTheDocument()
    expect(screen.getByText('Caseoh')).toBeInTheDocument()
  })

  it('should render nothing when photos array is empty', () => {
    const { container } = render(<PhotoList photos={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})
