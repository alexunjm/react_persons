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

    case actionTypes.person.request.get.by.id.START: {
      const newData = update(state, {
        loading: { $set: true },
      })
      return newData
    }

    case actionTypes.person.request.get.by.id.SUCCESS: {
      const newData = update(state, {
        loading: { $set: false },
        foundById: { $set: action.payload },
        error: { $set: false },
        errorMessage: { $set: '' },
      })

      return newData
    }

    case actionTypes.person.request.get.by.id.FAILURE: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
      })

      return newData
    }

    case actionTypes.person.request.save.START: {
      const newData = update(state, {
        loading: { $set: true },
      })
      return newData
    }

    case actionTypes.person.request.save.SUCCESS: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: false },
        errorMessage: { $set: '' },
      })

      return newData
    }

    case actionTypes.person.request.save.FAILURE: {
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

    case actionTypes.person.form.FILL: {
      const newData = update(state, {
        edit: {
          data: { $set: action.payload },
          error: { $set: false },
          errorMessage: { $set: '' },
        },
      })

      return newData
    }

    case actionTypes.person.form.PRINT_ERROR: {
      const newData = update(state, {
        edit: {
          error: { $set: true },
          errorMessage: { $set: action.payload },
        },
      })

      return newData
    }

    case actionTypes.person.form.CLEAN_ERROR: {
      const newData = update(state, {
        edit: {
          error: { $set: false },
          errorMessage: { $set: '' },
        },
      })

      return newData
    }

    case actionTypes.person.ADD: {
      const newData = update(state, {
        all: { $push: [action.payload] },
        len: { $set: state.len + 1 },
      })

      return newData
    }

    case actionTypes.person.UPDATE: {
      const index = state.all.findIndex(
        (person) => person.id == action.payload.id
      )
      const newData = update(state, {
        all: { $splice: [[index, 1, action.payload]] },
      })

      return newData
    }

    default:
      return state
  }
}
