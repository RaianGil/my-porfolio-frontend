import React from 'react'
import style from './style.module.css'
import MainFrame from '../components/MainFrame'
import { Div } from '@/components'
import { useAppSelector } from '@/hooks'
import { selectDBMode, selectDarkMode } from '@/data/state'

export const MainContainer = ({dispatch, router}) => {
  const darkMode = useAppSelector(selectDarkMode)
  const dbMode = useAppSelector(selectDBMode)
  return <div className={`${style.container} ${darkMode ? 'dark' : ''} ${dbMode ? style.bgDragonBall: ''}`}>
    <MainFrame dispatch={dispatch} router={router} darkMode={darkMode} dbMode={dbMode}/>
  </div> 
}