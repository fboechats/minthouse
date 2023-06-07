import { ReactElement, useId } from 'react'

type TextFieldProps = {
  label: string
  onChange: (value: boolean) => void
}

export function Checkbox({ label, onChange }: TextFieldProps): ReactElement {
  const id = useId()

  return (
    <div className="flex gap-s3 font-body text-t3 text-neutral-900">
      <input
        id={id}
        type="checkbox"
        className="bg-white text-neutral-400 accent-primary-500 focus:outline-none"
        value="checked"
        onChange={(event) => onChange(event.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
