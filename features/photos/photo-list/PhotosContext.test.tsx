import { describe, it, expect } from 'vitest'
import { PhotosProvider, usePhotosContext } from './PhotosContext'
import { render, screen } from '@testing-library/react'
import { Photo } from './types'
import userEvent from '@testing-library/user-event'

const photo1 = {
  id: '1',
  photographer: 'Test Photographer',
  photographer_url: 'https://example.com',
  liked: true,
  src: { original: 'orig.jpg', small: 'small.jpg' },
  alt: 'Test photo',
  avg_color: '#ffffff',
} satisfies Photo

const photo2 = {
  id: '2',
  photographer: 'Another Photographer',
  photographer_url: 'https://example.com',
  liked: false,
  src: { original: 'orig2.jpg', small: 'small2.jpg' },
  alt: 'Another photo',
  avg_color: '#000000',
} satisfies Photo

const photos: Photo[] = [photo1, photo2]

describe('PhotosContext', () => {
  it('should default to no likes', () => {
    const TestComponent = () => {
      const { likes } = usePhotosContext()

      return <div data-testid="likes">{JSON.stringify(likes)}</div>
    }
    render(
      <PhotosProvider>
        <TestComponent />
      </PhotosProvider>
    )

    expect(screen.getByTestId('likes')).toHaveTextContent('{}')
  })

  it('should set likes', async () => {
    const TestComponent = () => {
      const { likes, setLikes } = usePhotosContext()

      return (
        <>
          <div data-testid="likes">{JSON.stringify(likes)}</div>
          <button onClick={() => setLikes(photos)}>Set likes</button>
        </>
      )
    }
    render(
      <PhotosProvider>
        <TestComponent />
      </PhotosProvider>
    )

    const user = userEvent.setup()
    await user.click(screen.getByRole('button'))

    expect(screen.getByTestId('likes')).toHaveTextContent(
      JSON.stringify({ 1: true, 2: false })
    )
  })

  it('should toggle likes for a photo', async () => {
    const TestComponent = () => {
      const { likes, toggleLike } = usePhotosContext()

      return (
        <>
          <div data-testid="likes">{JSON.stringify(likes)}</div>
          <button onClick={() => toggleLike('1')}>Set likes</button>
        </>
      )
    }
    render(
      <PhotosProvider>
        <TestComponent />
      </PhotosProvider>
    )

    expect(screen.getByTestId('likes')).toHaveTextContent(JSON.stringify({}))

    const user = userEvent.setup()
    await user.click(screen.getByRole('button'))

    expect(screen.getByTestId('likes')).toHaveTextContent(
      JSON.stringify({ 1: true })
    )

    await user.click(screen.getByRole('button'))

    expect(screen.getByTestId('likes')).toHaveTextContent(
      JSON.stringify({ 1: false })
    )
  })

  it('should override likes when calling setLikes', async () => {
    const TestComponent = () => {
      const { likes, toggleLike, setLikes } = usePhotosContext()
      return (
        <>
          <div data-testid="likes">{JSON.stringify(likes)}</div>
          <button onClick={() => toggleLike('2')}>Toggle</button>
          <button onClick={() => setLikes(photos)}>Set likes</button>
        </>
      )
    }

    render(
      <PhotosProvider>
        <TestComponent />
      </PhotosProvider>
    )

    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: 'Toggle' }))
    await user.click(screen.getByRole('button', { name: 'Set likes' }))

    expect(screen.getByTestId('likes')).toHaveTextContent(
      '{"1":true,"2":false}'
    )
  })
})
