import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'
import getAllPersonsService from 'services/person/getAllPersonsService'

const getAllPersons = (): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(request())

      getAllPersonsService()
        .then((data) => {
          const payload = data
          dispatch(success(payload))
        })
        .catch((error) => {
          dispatch(failure(`communication error: ${error}`))
        })
    } catch (error) {
      dispatch(failure(`error getting persons result: ${error}`))
    }
  }

  function request() {
    return { type: actionTypes.person.request.get.all.START }
  }

  function success(data: any) {
    return {
      type: actionTypes.person.request.get.all.SUCCESS,
      payload: data,
    }
  }

  function failure(error: string) {
    return {
      type: actionTypes.person.request.get.all.FAILURE,
      payload: { message: error },
    }
  }
}
export default getAllPersons
