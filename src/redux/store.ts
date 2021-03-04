import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerMiddleware } from './middleware/routing'
import { globalReducer } from './reducers/globalReducer'
import { personReducer } from './reducers/personReducer'

const rootReducer = {
  global: globalReducer,
  person: personReducer,
}

const middleWares = [routerMiddleware, thunk]

const reducers = combineReducers({
  ...rootReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWares))
)

export { store }
