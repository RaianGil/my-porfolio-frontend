import React from 'react'
import Interface from './Interfaces'
import { Div } from '../Div'
import Controller from './controller'

export const Label = 
  (props:Interface) => {
    const {
      getStyle,
      getText,
      getOnClick
    } = Controller.getInstance(props)
    return !getOnClick ? 
      <span className={getStyle()}>
        {getText()}
      </span> : 
      <Div className={getStyle()} onClick={() => 'prueba'}>
        {getText()}
      </Div>
  }