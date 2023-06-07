import { ReactElement } from 'react'

type StatusBadgeProps = {
  children: string
}

function StatusBadge({ children }: StatusBadgeProps): ReactElement {
  return (
    <div className="flex items-center justify-center rounded-full bg-success-100 px-s1 py-s0 font-body text-t2 text-success-700">
      {children}
    </div>
  )
}

export function Table(): ReactElement {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full font-heading text-t3">
        <thead className="bg-neutral-100 text-neutral-600">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal" align="left">
              Items
            </th>
            <th scope="col" className="px-6 py-3 font-normal" align="left">
              Date
            </th>
            <th scope="col" className="px-6 py-3 font-normal" align="left">
              Earnings
            </th>
            <th scope="col" className="px-6 py-3 font-normal" align="left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-t3 text-neutral-900">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-semibold"
              align="left"
            >
              Consequat
            </th>
            <td className="px-6 py-4">02/08/2023</td>
            <td className="px-6 py-4">$473.18</td>
            <td className="px-6 py-4">
              <StatusBadge>In progress</StatusBadge>
            </td>
          </tr>
          <tr className="bg-white text-t3 text-neutral-900">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-semibold"
              align="left"
            >
              Reprehend
            </th>
            <td className="px-6 py-4">01/09/2023</td>
            <td className="px-6 py-4">$665.86</td>
            <td className="px-6 py-4">
              <StatusBadge>Completed</StatusBadge>
            </td>
          </tr>
          <tr className="bg-white text-t3 text-neutral-900">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-semibold"
              align="left"
            >
              Labore
            </th>
            <td className="px-6 py-4">15/12/2023</td>
            <td className="px-6 py-4">$322.23</td>
            <td className="px-6 py-4">
              <StatusBadge>Completed</StatusBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
