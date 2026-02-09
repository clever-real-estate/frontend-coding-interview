import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  const isTokenValid = true
  // We'd check if the user has access to view this,
  // but, we'll hardcode to true for simplicity sake
  const hasAccess = true

  if (token == null || !isTokenValid || !hasAccess) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=nature&per_page=10`,
      {
        headers: {
          cache: 'no-store',
          // Just so that you don't have to setup a .env, I'm hard coding this.
          Authorization: 'Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0'!,
          // Authorization: process.env.PEXELS_API_KEY!,
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
