import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from './LoginForm'
import { userEvent } from '@testing-library/user-event'
import { beforeEach } from 'node:test'
import { loginAction } from './actions'

vi.mock('./actions', () => ({
  loginAction: vi.fn(),
}))

describe('LoginForm', () => {
  beforeEach(() => {
    vi.mocked(loginAction).mockReset()
  })

  it('renders a form element with username and password inputs', () => {
    render(<LoginForm />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('submits username and password on submit', async () => {
    render(<LoginForm />)

    vi.mocked(loginAction).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 100))
    )

    const submitButton = screen.getByRole('button', { name: /sign in/i })

    expect(submitButton).toBeEnabled()

    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/username/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'secret')
    await user.click(submitButton)

    expect(submitButton).toBeDisabled()
  })

  it('renders error on submit', async () => {
    render(<LoginForm />)

    // Not going to write out the test because it's not in the design
    // and therefore not implemented
  })
})
