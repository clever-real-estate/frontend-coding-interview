// import { render, screen } from '@testing-library/react'
// import { userEvent } from '@testing-library/user-event'
// import { describe, it, expect } from 'vitest'
// import { LoginFields } from './LoginFields'

// describe('LoginForm', () => {
//   it('renders username and password inputs', () => {
//     render(<LoginFields />)

//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
//   })

//   it('renders forgot password link', () => {
//     render(<LoginFields />)

//     const forgotPasswordLink = screen.getByRole('link', { name: /forgot password/i })
//     expect(forgotPasswordLink).toBeInTheDocument()
//     expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password')
//   })

//   it('allows user to type in username field', async () => {
//     const user = userEvent.setup()
//     render(<LoginForm />)

//     const usernameInput = screen.getByLabelText(/username/i)
//     await user.type(usernameInput, 'testuser')

//     expect(usernameInput).toHaveValue('testuser')
//   })

//   it('allows user to type in password field', async () => {
//     const user = userEvent.setup()
//     render(<LoginForm />)

//     const passwordInput = screen.getByLabelText(/password/i)
//     await user.type(passwordInput, 'password123')

//     expect(passwordInput).toHaveValue('password123')
//   })
// })
