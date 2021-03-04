import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

export const showGlobalLoader = (): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    console.warn('showGlobalLoader')
    dispatch(showDispatcher())
  }

  function showDispatcher() {
    return {
      type: actionTypes.global.loading.HIDE,
    }
  }
}
