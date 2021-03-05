// @flow

import { FC, ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { personFormFill, savePerson, updatePerson } from 'redux/actions/person'
import { PersonState } from 'redux/state/person'

export const PersonForm: FC = (): ReactElement => {
  const emptyPerson = {
    id: '',
    firstname: '',
    lastname: '',
    age: '',
  }
  const [id, setId] = useState<string>(emptyPerson.id)
  const [firstname, setFirstname] = useState<string>(emptyPerson.firstname)
  const [lastname, setLastname] = useState<string>(emptyPerson.lastname)
  const [age, setAge] = useState<string>(emptyPerson.age)

  const personState = useSelector(
    (state: { person: PersonState }) => state.person
  )
  useEffect(() => {
    if (personState.edit.data) {
      setFirstname(personState.edit.data.firstname)
      setLastname(personState.edit.data.lastname)
      setAge(personState.edit.data.age + '')
      if (personState.edit.data.id) {
        setId(personState.edit.data.id)
      }
    }
  }, [personState.edit])

  const dispatch = useDispatch()
  const handleSaveAction = () => {
    if (id) {
      dispatch(
        updatePerson({
          id,
          firstname,
          lastname,
          age,
        })
      )
      return
    }
    dispatch(
      savePerson({
        firstname,
        lastname,
        age,
      })
    )
  }
  const handleCloseAction = () => {
    dispatch(personFormFill(null))
  }
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-8 gap-2">
                <div className="col-span-8 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value)
                    }}
                  />
                </div>

                <div className="col-span-8 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value)
                    }}
                  />
                </div>

                <div className="col-span-8 sm:col-span-2">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="age"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={handleCloseAction}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSaveAction}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
