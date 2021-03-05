import { Person } from 'services/person'

export interface PersonState {
  loading: boolean
  all: Array<Person>
  len: number
  foundById: Person
  error: boolean
  errorMessage: string
  edit: {
    data: Person
    error: boolean
    errorMessage: string
  }
}
