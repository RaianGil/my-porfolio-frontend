import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../assets/style.css'
import store from '../data/store'
import { AppFrame } from '../layout/index'

const MyApp = ({ Component, pageProps}:AppProps) => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <AppFrame Component={Component} pageProps={pageProps}/>
      </React.StrictMode>
    </Provider>
  )
}

export default MyApp