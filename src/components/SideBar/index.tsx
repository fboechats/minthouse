import { Logo } from 'components/Logo'
import { ReactElement, useState } from 'react'
import avatar from './avatar.jpg'
import { logout } from 'api'
import { useNavigate } from 'react-router-dom'

type SidebarItem = {
  label: string
  selected: boolean
  setSelected: (label: string) => void
}

function SideBarItem({
  label,
  selected,
  setSelected
}: SidebarItem): ReactElement {
  return (
    <a
      aria-selected={selected}
      className="cursor-pointer rounded-m bg-white px-4 py-2 font-body text-neutral-600 hover:bg-primary-200 hover:font-bold hover:text-primary-700 aria-selected:bg-primary-200 aria-selected:font-bold aria-selected:text-primary-700"
      onClick={(): void => setSelected(label)}
    >
      {label}
    </a>
  )
}

export function SideBar(): ReactElement {
  const [selected, setSelected] = useState('Dashboard')
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center px-4 py-6 shadow-xs">
      <div className="flex">
        <Logo variant="secondary" />
        <div className="ml-3 flex flex-col whitespace-nowrap">
          <p className="font-heading text-t5 font-semibold text-neutral-900">
            Publisher Name
          </p>
          <span className="font-body text-t3 text-neutral-600">
            BUZZING.COM
          </span>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col gap-2">
        <SideBarItem
          selected={selected === 'Dashboard'}
          label="Dashboard"
          setSelected={setSelected}
        />
        <SideBarItem
          selected={selected === 'Missions'}
          label="Missions"
          setSelected={setSelected}
        />
        <SideBarItem
          selected={selected === 'Media'}
          label="Media"
          setSelected={setSelected}
        />
        <SideBarItem
          selected={selected === 'Analytics'}
          label="Analytics"
          setSelected={setSelected}
        />
      </div>
      <div className="mt-auto flex items-center">
        <img
          className="h-8 w-8 self-baseline rounded-full bg-secondary-200"
          src={avatar}
        />
        <div className="ml-3 flex flex-col items-start">
          <p className="font-heading text-t3 font-semibold text-neutral-900">
            Sergey Goldberg
          </p>
          <span className="font-body text-t2 text-neutral-600">
            company@example.com
          </span>
          <button
            className="font-body text-t3 font-semibold text-neutral-600 hover:text-neutral-900"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
