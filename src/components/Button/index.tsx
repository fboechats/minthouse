import { ReactElement } from 'react'

type ButtonProps = {
  children: string
}

export function Button({ children }: ButtonProps): ReactElement {
  return (
    <button className="inline-block w-full rounded-l bg-primary-500 p-4 font-body text-t4 text-white hover:bg-primary-600 focus:outline-none active:bg-primary-650">
      {children}
    </button>
  )
}
