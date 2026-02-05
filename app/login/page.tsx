import { Logo } from '@/components/Logo'
import { LoginForm } from '@/features/forms/login-form/LoginForm'

export default async function Login() {
  return (
    <main className="md:flex w-full items-center justify-center h-screen">
      {/* This yields 35xp of margin on 390px, but still retains 16px of padding on smaller screens */}
      <div className="w-[min(319px,100%-32px)] shrink-0 mx-auto">
        <div className="pt-9 pb-6 w-[75px] mx-auto">
          <Logo />
        </div>

        <h1 className="font-bold text-[20px] text-center pb-[34px]">
          Sign in to your account
        </h1>

        <LoginForm />
      </div>
    </main>
  )
}
