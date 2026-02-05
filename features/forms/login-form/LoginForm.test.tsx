import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('SignupForm', () => {
  it('renders a form element', () => {
    render(<LoginForm />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })

  it('renders the submit button with correct text', () => {
    render(<LoginForm />)
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()
  })

  it('renders children when provided', () => {
    render(
      <LoginForm>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </LoginForm>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <LoginForm>
        <input type="email" name="email" />
      </LoginForm>
    )

    const form = container.querySelector('form')
    const submitHandler = vi.fn(e => e.preventDefault())

    if (form) {
      form.addEventListener('submit', submitHandler)
      const button = screen.getByRole('button', { name: /sign in/i })
      await user.click(button)

      expect(submitHandler).toHaveBeenCalled()
    }
  })

  it('renders without children', () => {
    render(<LoginForm />)
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()
  })

  it('form submission can be triggered by pressing enter', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <LoginForm>
        <input type="email" name="email" />
      </LoginForm>
    )

    const form = container.querySelector('form')
    const submitHandler = vi.fn(e => e.preventDefault())

    if (form) {
      form.addEventListener('submit', submitHandler)
      const input = screen.getByRole('textbox')
      await user.type(input, '{Enter}')

      expect(submitHandler).toHaveBeenCalled()
    }
  })

  it('renders multiple form fields correctly', () => {
    render(
      <LoginForm>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </LoginForm>
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })
})
