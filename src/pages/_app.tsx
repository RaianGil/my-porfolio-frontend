import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../assets/style.css'
import store from '../data/store'
import { AppFrame } from '../layout/index'

const MyApp = ({ Component, pageProps}:AppProps) => {
  console.log('api url is', process.env.API_URL, process.env.PRUEBA, process.env.PRUEBA1)
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Porfolio</title>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <AppFrame Component={Component} pageProps={pageProps}/>
      </React.StrictMode>
    </Provider>
  )
}
export default MyApp