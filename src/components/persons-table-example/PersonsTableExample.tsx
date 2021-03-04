import React, { FC } from 'react'

interface PersonsTableExampleProps {
  test: string
}

const PersonsTableExample: FC<PersonsTableExampleProps> = ({
  test,
}: PersonsTableExampleProps) => {
  const colNames = ['Name', 'Title', 'Status', 'Role']

  return (
    <div className="flex flex-col">
      {test}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {colNames.map((col, i) => (
                    <th
                      scope="col"
                      key={i}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <NameChild />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <TitleChild />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusChild />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <RoleChild />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <EditHandlerChild />
                  </td>
                </tr>
                {/* More items... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
const EditHandlerChild: FC = () => {
  return (
    <a href="#" className="text-indigo-600 hover:text-indigo-900">
      Edit
    </a>
  )
}
const RoleChild: FC = () => {
  return <>Admin</>
}
const StatusChild: FC = () => {
  return (
    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
      Active
    </span>
  )
}
const TitleChild: FC = () => {
  return (
    <>
      <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
      <div className="text-sm text-gray-500">Optimization</div>
    </>
  )
}
const NameChild: FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
        <div className="text-sm text-gray-500">jane.cooper@example.com</div>
      </div>
    </div>
  )
}

export default PersonsTableExample
