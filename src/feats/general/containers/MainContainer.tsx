import React from 'react'
import style from './style.module.css'
import MainFrame from '../components/MainFrame'
import { Div } from '@/components'
import { useAppSelector } from '@/hooks'
import { selectDarkMode } from '@/data/state'

export const MainContainer = ({dispatch, router}) => {
  const darkMode = useAppSelector(selectDarkMode)
  return <div className={`${style.container} ${darkMode ? 'dark' : ''}`}>
    <MainFrame dispatch={dispatch} router={router} darkMode={darkMode}/>
  </div> 
}