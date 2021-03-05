import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllPersons,
  deletePerson,
  personFormFill,
} from 'redux/actions/person'
import { PersonState } from 'redux/state/person'
import { Person } from 'services/person'

interface ActionRowComponentProps {
  handleClick: () => void
  icon: string
  text: string
}

const ActionRowComponent: FC<ActionRowComponentProps> = ({
  handleClick,
  icon,
  text,
}: ActionRowComponentProps) => {
  return (
    <button
      className="text-indigo-200 hover:text-indigo-400 focus:outline-none flex flex-col items-center"
      type="button"
      onClick={() => handleClick()}
    >
      <span>{icon}</span>
      <span className="text-xs">{text}</span>
    </button>
  )
}
const EditHandlerChild: FC<{ person: Person }> = ({
  person,
}: {
  person: Person
}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(personFormFill(person))
  }

  return (
    <ActionRowComponent
      {...{
        handleClick,
        icon: '✏',
        text: 'Edit',
      }}
    />
  )
}
const RemoveHandlerChild: FC<{ id: string }> = ({ id }: { id: string }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deletePerson(id))
  }

  return (
    <ActionRowComponent
      {...{
        handleClick,
        icon: '❌',
        text: 'Remove',
      }}
    />
  )
}

interface TextChildProps {
  textValue: string
}
const TextChild: FC<TextChildProps> = ({ textValue }: TextChildProps) => (
  <div className="flex items-center">
    <div className="ml-4">
      <div className="text-sm text-gray-900">{textValue}</div>
    </div>
  </div>
)

const PersonsTable: FC = () => {
  const personState = useSelector(
    (state: { person: PersonState }) => state.person
  )
  const colNames = personState.len > 0 ? Object.keys(personState.all[0]) : []

  const dispatch = useDispatch()
  useEffect((): void => {
    dispatch(getAllPersons())
  }, [])

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {!personState.loading ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {colNames.map((col, i) => (
                      <th
                        scope="col"
                        key={`${col + i}-h`}
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {col}
                      </th>
                    ))}
                    <th scope="col" colSpan={2} className="relative px-6 py-3">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {personState.all.map((row) => (
                    <tr key={row.id}>
                      {colNames.map((col, j) => (
                        <td
                          key={`${row.id}-${j}`}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <TextChild textValue={row[col]} />
                        </td>
                      ))}

                      <td className="pl-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                        <EditHandlerChild person={row} />
                      </td>
                      <td className="pr-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                        <RemoveHandlerChild id={`${row.id}`} />
                      </td>
                    </tr>
                  ))}
                  {/* More items... */}
                </tbody>
              </table>
            ) : (
              'Loading persons...'
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonsTable
