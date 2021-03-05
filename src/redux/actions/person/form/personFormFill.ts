import actionTypes from 'redux/constants/actionTypes'
import { Dispatcher } from 'redux/actions/Dispatcher'

const personFormFill = (person: any): Dispatcher => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(personFormFillDispatcher(person))
  }
  function personFormFillDispatcher(payload) {
    return {
      type: actionTypes.person.form.FILL,
      payload,
    }
  }
}
export default personFormFill
