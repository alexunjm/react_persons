import { PersonState } from '.'

export const personInitialState: PersonState = {
  loading: false,
  all: [],
  len: 0,
  error: false,
  errorMessage: '',
  foundById: null,
  edit: {
    data: null,
    error: false,
    errorMessage: '',
  },
}
