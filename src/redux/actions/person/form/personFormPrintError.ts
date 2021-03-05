import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const personFormPrintError = (error: string): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(personFormPrintErrorDispatcher(error))
  }
  function personFormPrintErrorDispatcher(payload) {
    return {
      type: actionTypes.person.form.PRINT_ERROR,
      payload,
    }
  }
}
export default personFormPrintError
