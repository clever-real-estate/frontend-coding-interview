'use client'

import { FC, ReactNode } from 'react'
import { loginAction } from './actions'
import { useActionState } from 'react'

export const LoginForm: FC<{ children?: ReactNode }> = ({ children }) => {
]  const [, formAction, isPending] = useActionState(loginAction, null)

  return (
    <form action={formAction} className="max-w-[319px] mx-auto">
      {/* Could render out errors, but we'll just keep it simple because it's not in the design */}
      {/* {state.message} */}
      {children}
      <button
        disabled={isPending}
        className="mt-6 font-bold text-[16px] text-white bg-submit-primary h-[44px] flex justify-center items-center w-full rounded-[8px] cursor-pointer"
      >
        Sign In
      </button>
    </form>
  )
}
