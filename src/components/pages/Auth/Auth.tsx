import { Logo } from 'components/Logo'
import illustration from './illustration.png'
import { TextField } from 'components/TextField'
import { Checkbox } from 'components/Checkbox'
import { Button } from 'components/Button'
import { FormEventHandler, useState } from 'react'
import { RejectReturn, login } from 'api'
import { useNavigate } from 'react-router-dom'

export function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSigned, setKeepSigned] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )
  const navigate = useNavigate()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    await login(email, password, keepSigned).catch((error: RejectReturn) =>
      setErrorMessage(error.message)
    )

    return navigate('/dashboard')
  }

  return (
    <div className="flex h-screen w-full bg-white">
      <div className="flex h-full flex-1 justify-center py-s13">
        <div className="flex w-Sz22 flex-col items-center">
          <Logo variant="primary" />
          <h1 className="mb-s2 mt-s18 font-heading text-t8 font-semibold text-neutral-900">
            Welcome back!
          </h1>
          <p className="text-t3 text-neutral-600">
            Enter your credentials to access your account
          </p>
          <form
            className="mb-s9 mt-s11 flex w-full flex-col gap-s9"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Email"
              placeholder="example.email@gmail.com"
              onChange={setEmail}
              errorMessage={errorMessage}
            />
            <TextField
              label="Password"
              placeholder="Enter at least 8+ characters"
              onChange={setPassword}
              errorMessage={errorMessage}
            />
            <div className="flex w-full justify-between">
              <Checkbox label="Keep me logged in" onChange={setKeepSigned} />
              <a className="font-body text-t3 text-primary-600">
                Forgot password?
              </a>
            </div>
            <Button>Login</Button>
          </form>
        </div>
      </div>
      <div className="hidden h-full flex-1 flex-col justify-end lg:flex">
        <img src={illustration} />
      </div>
    </div>
  )
}
