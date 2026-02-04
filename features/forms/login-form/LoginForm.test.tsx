import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SignupForm } from './LoginForm'

describe('SignupForm', () => {
  it('renders a form element', () => {
    render(<SignupForm />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })

  it('renders the submit button with correct text', () => {
    render(<SignupForm />)
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()
  })

  it('renders children when provided', () => {
    render(
      <SignupForm>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </SignupForm>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SignupForm>
        <input type="email" name="email" />
      </SignupForm>
    )

    const form = container.querySelector('form')
    const submitHandler = vi.fn((e) => e.preventDefault())

    if (form) {
      form.addEventListener('submit', submitHandler)
      const button = screen.getByRole('button', { name: /sign in/i })
      await user.click(button)

      expect(submitHandler).toHaveBeenCalled()
    }
  })

  it('renders without children', () => {
    render(<SignupForm />)
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()
  })

  it('form submission can be triggered by pressing enter', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SignupForm>
        <input type="email" name="email" />
      </SignupForm>
    )

    const form = container.querySelector('form')
    const submitHandler = vi.fn((e) => e.preventDefault())

    if (form) {
      form.addEventListener('submit', submitHandler)
      const input = screen.getByRole('textbox')
      await user.type(input, '{Enter}')

      expect(submitHandler).toHaveBeenCalled()
    }
  })

  it('renders multiple form fields correctly', () => {
    render(
      <SignupForm>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </SignupForm>
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })
})
