import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'
import savePersonService from 'services/person/savePersonService'
import getPersonByIdService from 'services/person/getPersonByIdService'

const savePersonRequest = ({
  firstname,
  lastname,
  age,
}: {
  firstname: string
  lastname: string
  age: string
}): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(request())

      savePersonService({ firstname, lastname, age: Number(age) })
        .then((generatedId) => {
          dispatch(success())
          return generatedId
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
      type: actionTypes.person.ADD,
      payload,
    }
  }
}
export default savePersonRequest
