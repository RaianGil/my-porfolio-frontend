import React from 'react'
import style from './style.module.css'
import MainFrame from '../components/MainFrame'
import { Div } from '@/components'

export const MainContainer = ({dispatch, router}) => {
  return <div className={style.container}>
    <MainFrame dispatch={dispatch} router={router}/>
  </div> 
}