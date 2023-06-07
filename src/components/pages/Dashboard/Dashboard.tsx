import { AuthProvider } from 'components/AuthProvider'
import { Button } from 'components/Button'
import { Chart } from 'components/Chart'
import { SideBar } from 'components/SideBar'
import { Table } from 'components/Table'
import { ReactElement } from 'react'

export function Dashboard(): ReactElement {
  return (
    <AuthProvider>
      <div className="flex h-screen w-full bg-white">
        <SideBar />
        <div className="flex w-full justify-center px-8">
          <div className="mr-6 flex flex-col">
            <h1 className="mt-s14 font-heading text-t8 font-semibold text-neutral-900">
              Dashboard
            </h1>
            <div className="mt-s12 flex gap-8">
              <Button>View on-going missions</Button>
              <Button>View on-going missions</Button>
              <Button>View on-going missions</Button>
            </div>
            <div className="mt-s12">
              <h2 className="mb-4 font-heading text-t5 font-semibold text-neutral-900">
                Top Perfoming Articles
              </h2>
              <Table />
            </div>
          </div>
          <div className="mt-s17 flex flex-col gap-12">
            <div className="flex flex-col rounded-l bg-white px-4 py-2 shadow-m">
              <h3 className="font-body text-t4 text-neutral-900">
                Earnings YTD
              </h3>
              <strong className="font-heading text-t8 text-neutral-900">
                $56,201
              </strong>
              <span className="font-body text-t3 font-semibold text-success-650">
                2.29%
              </span>
            </div>
            <div className="flex flex-col rounded-l bg-white px-4 py-2 shadow-m">
              <h3 className="font-heading text-t5 font-semibold text-neutral-900">
                Earnings by Brand
              </h3>
              <p className="font-body text-t3 text-neutral-600">YTD</p>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
