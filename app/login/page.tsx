import { Logo } from '@/components/Logo'
import { LoginForm } from '@/features/forms/login-form/LoginForm'

export default async function Login() {
  
  return (
    <main>
      <div className="pt-9 pb-6 w-[75px] mx-auto">
        <Logo />
      </div>

      <h1 className="font-bold text-[20px] text-center pb-[34px]">
        Sign in to your account
      </h1>

      <LoginForm />
    </main>
  )
}
