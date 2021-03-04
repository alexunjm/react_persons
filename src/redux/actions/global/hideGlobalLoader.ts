import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const hideGlobalLoader = (): Dispatcher => {
  function hideDispatcher() {
    return {
      type: actionTypes.global.loading.HIDE,
    }
  }
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(hideDispatcher())
  }
}
export default hideGlobalLoader
