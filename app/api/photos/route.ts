import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()

  const token = cookieStore.get('token')

  // Hardcode to true for simplicity sake
  const isTokenValid = true

  if (token == null || !isTokenValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=nature&per_page=10`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY!,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch photos from Pexels')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching photos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    )
  }
}
