import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'
import getPersonByIdService from 'services/person/getPersonByIdService'

const getPersonById = (id: string): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(request())

      getPersonByIdService(id)
        .then((data) => {
          dispatch(success(data))
        })
        .catch((error) => {
          dispatch(failure(`communication error: ${error}`))
        })
    } catch (error) {
      dispatch(failure(`error getting persons result: ${error}`))
    }
  }

  function request() {
    return { type: actionTypes.person.request.get.by.id.START }
  }

  function success(payload: any) {
    return {
      type: actionTypes.person.request.get.by.id.SUCCESS,
      payload,
    }
  }

  function failure(error: string) {
    return {
      type: actionTypes.person.request.get.by.id.FAILURE,
      payload: { message: error },
    }
  }
}
export default getPersonById
