import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import { store } from 'redux/store'
import { hideGlobalLoader } from 'redux/actions/global'

import 'tailwindcss/tailwind.css'
import { GlobalState } from 'redux/state/global'

// makeStore function that returns a new store for every request
const makeStore = () => store
const Wrapper = createWrapper(makeStore)

function MyApp({ Component, pageProps }) {
  const globalState = useSelector(
    (state: { global: GlobalState }) => state.global
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideGlobalLoader())
  }, [])

  return (
    <Provider store={store}>
      {globalState.loading ? 'Please wait...' : <Component {...pageProps} />}
    </Provider>
  )
}

export default Wrapper.withRedux(MyApp)
