import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const showGlobalLoader = (): Dispatcher => {
  function showDispatcher() {
    return {
      type: actionTypes.global.loading.HIDE,
    }
  }
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    console.warn('showGlobalLoader')
    dispatch(showDispatcher())
  }
}
export default showGlobalLoader
