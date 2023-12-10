import React, { Children } from 'react'
import Controller from './controller'
import { Icon } from '..'

export const Card = (props:any) => {
  const {
    getStyle,
    getChildren,
    getIcon
  } = Controller.getInstance(props)
  return <div className={getStyle()}>
    <Icon icon={getIcon()} size={25}/>
    {getChildren()}
  </div>
}