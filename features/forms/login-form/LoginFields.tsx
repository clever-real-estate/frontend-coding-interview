import Link from 'next/link'

export const LoginFields = () => {
  return (
    <>
      <div>
        <label
          htmlFor="username"
          className="block font-bold text-[14px] pb-[8px]"
        >
          Username
        </label>
        <input
          name="username"
          id="username"
          placeholder="Username"
          className="block w-full text-fg border-input-stroke border border-solid rounded-[8px] py-[13px] pl-[10px]"
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
          name="password"
          id="password"
          placeholder="Password"
          className="block w-full text-fg border-input-stroke border border-solid rounded-[8px] py-[13px] pl-[10px]"
        />
      </div>
    </>
  )
}
