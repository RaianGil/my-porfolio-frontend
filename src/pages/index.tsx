import { MainContainer } from '@/feats/general'
import React from 'react'

const home = ({dispatch, router}) => {
  console.log('Prueba', process.env.PRUEBA)
  return <>
    <MainContainer dispatch={dispatch} router={router}/>
  </>
}

export default home
