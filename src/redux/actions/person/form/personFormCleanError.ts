import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const personFormCleanError = (): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(personFormCleanErrorDispatcher())
  }
  function personFormCleanErrorDispatcher() {
    return {
      type: actionTypes.person.form.PRINT_ERROR,
    }
  }
}
export default personFormCleanError
