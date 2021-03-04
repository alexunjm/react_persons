import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import { store } from 'redux/store'
import { hideGlobalLoader } from 'redux/actions/global'

import 'tailwindcss/tailwind.css'

//makeStore function that returns a new store for every request
const makeStore = () => store
const Wrapper = createWrapper(makeStore)

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideGlobalLoader())
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default Wrapper.withRedux(MyApp)
