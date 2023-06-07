import { ReactElement, useId } from 'react'

type TextFieldProps = {
  label: string
  placeholder: string
  onChange: (text: string) => void
  errorMessage?: string
}

export function TextField({
  label,
  placeholder,
  onChange,
  errorMessage
}: TextFieldProps): ReactElement {
  const id = useId()

  return (
    <div className="flex w-full flex-col font-body text-t3">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input
        id={id}
        className="border-b border-neutral-400 text-neutral-400 focus:outline-none aria-[errormessage]:border-danger-400"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-errormessage={errorMessage}
      />
      {errorMessage && (
        <span className="font-body text-t2 font-semibold text-danger-400">
          {errorMessage}
        </span>
      )}
    </div>
  )
}
