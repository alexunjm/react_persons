import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const savePersonRequest = (): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      dispatch(success())
    } catch (error) {
      dispatch(failure(`error getting interaction result: ${error}`))
    }
  }

  function success() {
    return {
      type: actionTypes.person.request.get.all.SUCCESS,
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
