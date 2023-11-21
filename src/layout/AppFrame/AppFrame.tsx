import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import style from './style.module.css'
import { Div, Spinner } from '../../components'
import Popup from '../Popup'
import { selectGlobal } from '../../data/state'
import Controller from './controller'

export const AppFrame = ({Component, pageProps}:any) => {
  const {
    getDispatch,
    getRouter,
    getAppReady,
    getAppInit,
  } = Controller.getInstance(useAppDispatch(), useAppSelector(selectGlobal), useRouter())
  if(getAppInit())
    return <Spinner />
  if(!getAppReady())
    return <>
      <Spinner />
      <div style={{display: 'none'}}><Component dispatch={getDispatch()} router={getRouter()} {...pageProps} /></div>
    </> 
  return <main className={style.container}> 
    <Popup dispatch={getDispatch()}/>
    <Component dispatch={getDispatch()} router={getRouter()} {...pageProps} />
  </main>
}

export default AppFrame