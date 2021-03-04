import update from 'immutability-helper'
import actionTypes from 'redux/constants/actionTypes'
import { globalInitialState, GlobalState } from 'redux/state/global'

export const globalReducer = (
  state = globalInitialState,
  action: { type: string; payload: any }
): GlobalState => {
  switch (action.type) {
    case actionTypes.global.loading.SHOW: {
      const newData = update(state, {
        loading: { $set: true },
      })
      return newData
    }
    case actionTypes.global.loading.HIDE: {
      const newData = update(state, {
        loading: { $set: false },
      })
      return newData
    }
    default:
      return state
  }
}
