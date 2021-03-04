import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const savePersonRequest = (data: any): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      console.warn('savePersonRequest', { data })

      dispatch(success([]))
    } catch (error) {
      dispatch(failure(`error getting interaction result: ${error}`))
    }
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
export default savePersonRequest
