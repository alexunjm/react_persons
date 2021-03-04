import actionTypes from 'redux/constants/actionTypes'

type dispatcher = (
  dispatch: (action: { type: string; payload?: any }) => void
) => void

export const getAllPersonsRequest = (): dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    try {
      console.warn('GetAllPersonsRequest')

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
