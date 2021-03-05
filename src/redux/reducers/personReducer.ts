import update from 'immutability-helper'
import actionTypes from 'redux/constants/actionTypes'
import { personInitialState, PersonState } from 'redux/state/person'

export const personReducer = (
  state = personInitialState,
  action: { type: string; payload: any }
): PersonState => {
  switch (action.type) {
    case actionTypes.person.request.get.all.START: {
      const newData = update(state, {
        loading: { $set: true },
      })
      return newData
    }

    case actionTypes.person.request.get.all.SUCCESS: {
      const newData = update(state, {
        loading: { $set: false },
        all: { $set: action.payload.data },
        len: { $set: action.payload.len },
        error: { $set: false },
        errorMessage: { $set: '' },
      })

      return newData
    }

    case actionTypes.person.request.get.all.FAILURE: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
      })

      return newData
    }

    case actionTypes.person.request.delete.START: {
      const newData = update(state, {
        loading: { $set: true },
      })
      return newData
    }

    case actionTypes.person.request.delete.SUCCESS: {
      const index = state.all.findIndex((person) => person.id == action.payload)
      const newData = update(state, {
        loading: { $set: false },
        all: { $splice: [[index, 1]] },
        len: { $set: state.len - 1 },
        error: { $set: false },
        errorMessage: { $set: '' },
      })

      return newData
    }

    case actionTypes.person.request.delete.FAILURE: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
      })

      return newData
    }

    default:
      return state
  }
}
