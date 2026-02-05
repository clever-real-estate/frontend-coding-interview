import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// In-memory store for likes (in production, use a database)
const likesStore = new Map<number, boolean>()

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  const isTokenValid = true

  if (token == null || !isTokenValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const photoId = parseInt(id, 10)

  if (isNaN(photoId)) {
    return NextResponse.json({ error: 'Invalid photo ID' }, { status: 400 })
  }

  // Toggle the like status
  const currentStatus = likesStore.get(photoId) || false
  const newStatus = !currentStatus
  likesStore.set(photoId, newStatus)

  return NextResponse.json({ id: photoId, liked: newStatus })
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  const isTokenValid = true

  if (token == null || !isTokenValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const photoId = parseInt(id, 10)

  if (isNaN(photoId)) {
    return NextResponse.json({ error: 'Invalid photo ID' }, { status: 400 })
  }

  const liked = likesStore.get(photoId) || false

  return NextResponse.json({ id: photoId, liked })
}
