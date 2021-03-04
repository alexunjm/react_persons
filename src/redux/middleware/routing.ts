import Router from 'next/router'
import { Dispatcher } from 'redux/actions/Dispatcher'

type Action<T> = {
  type: string
  payload: T
}

export const routerMiddleware = () => {
  return (next: (action: Action<any>) => any) => {
    return (action: Action<any>): Dispatcher => {
      if (
        action.payload?.routeTarget &&
        action.payload?.routeTarget !== Router.pathname
      ) {
        Router.push(action.payload.routeTarget)
      }
      return next(action)
    }
  }
}
