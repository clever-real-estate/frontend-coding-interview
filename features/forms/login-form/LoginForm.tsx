'use client'

import { FC, ReactNode } from 'react'
import { loginAction } from './actions'
import { useActionState } from 'react'
import Link from 'next/link'

export const LoginForm: FC<{ children?: ReactNode }> = () => {
  const [, formAction, isPending] = useActionState(loginAction, null)

  return (
    <form action={formAction} aria-label="Login">
      <div>
        <label
          htmlFor="username"
          className="block font-bold text-[14px] pb-[8px]"
        >
          Username
        </label>
        <input
          required
          name="username"
          id="username"
          placeholder="Username"
          className="block w-full text-fg border-input-stroke border border-solid rounded-[8px] py-[13px] pl-[10px]

          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          "
        />
      </div>
      <div className="pb-[23px]" />
      <div>
        <div className="flex justify-between items-baseline pb-[8px]">
          <label htmlFor="password" className="block font-bold text-[14px]">
            Password
          </label>
          <Link href="/forgot-password" className="text-[14px] text-link">
            Forgot password?
          </Link>
        </div>
        <input
          required
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          className="block w-full text-fg border-input-stroke border border-solid rounded-[8px] py-[13px] pl-[10px]
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          "
        />
      </div>
      <button
        disabled={isPending}
        aria-busy={isPending}
        type="submit"
        className="mt-6 font-bold text-[16px] text-white bg-submit-primary h-[44px] flex justify-center items-center w-full rounded-[8px] cursor-pointer"
      >
        Sign In
      </button>
    </form>
  )
}
