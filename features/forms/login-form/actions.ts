'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export async function loginAction(
  _: { message: string } | null,
  formData: FormData
) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const result = loginFormSchema.safeParse({ username, password })

  if (result.success) {
    const cooks = await cookies()

    cooks.set('token', 'howdy', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    redirect('/')
  }

  return {
    message: 'Username or password is incorrect',
  }
}
