import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'
import deletePersonService from 'services/person/deletePersonService'

const deletePerson = (id: string): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(request())

      deletePersonService(id)
        .then(() => {
          dispatch(success(id))
        })
        .catch((error) => {
          dispatch(failure(`communication error: ${error}`))
        })
    } catch (error) {
      dispatch(failure(`error getting persons result: ${error}`))
    }
  }

  function request() {
    return { type: actionTypes.person.request.delete.START }
  }

  function success(id: string) {
    return {
      type: actionTypes.person.request.delete.SUCCESS,
      payload: id,
    }
  }

  function failure(error: string) {
    return {
      type: actionTypes.person.request.delete.FAILURE,
      payload: { message: error },
    }
  }
}
export default deletePerson
