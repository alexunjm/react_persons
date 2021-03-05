import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'
import updatePersonService from 'services/person/updatePersonService'
import getPersonByIdService from 'services/person/getPersonByIdService'

const updatePersonRequest = ({
  id,
  firstname,
  lastname,
  age,
}: {
  id: string
  firstname: string
  lastname: string
  age: string
}): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(request())

      updatePersonService(id, { firstname, lastname, age: Number(age) })
        .then(() => {
          dispatch(success())
          return id
        }) /* 
        .catch((error) => {
          dispatch(failure(`communication error: ${error}`))
        }) */
        .then((id) => {
          return getPersonByIdService(id)
        })
        .then((person) => {
          dispatch(successGetPersonById(person))
        })
        .catch((error) => {
          dispatch(failure(`communication error: ${error}`))
        })
    } catch (error) {
      dispatch(failure(`error getting interaction result: ${error}`))
    }
  }

  function request() {
    return { type: actionTypes.person.request.save.START }
  }

  function success() {
    return {
      type: actionTypes.person.request.save.SUCCESS,
    }
  }

  function failure(error: string) {
    return {
      type: actionTypes.person.request.save.FAILURE,
      payload: { message: error },
    }
  }

  function successGetPersonById(payload) {
    return {
      type: actionTypes.person.UPDATE,
      payload,
    }
  }
}
export default updatePersonRequest
