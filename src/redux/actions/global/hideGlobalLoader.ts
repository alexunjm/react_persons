import actionTypes from 'redux/constants/actionTypes'

type dispatcher = (
  dispatch: (action: { type: string; payload?: any }) => void
) => void

export const hideGlobalLoader = (): dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    console.warn('hideGlobalLoader')
    dispatch(hideDispatcher())
  }

  function hideDispatcher() {
    return {
      type: actionTypes.global.loading.HIDE,
    }
  }
}
