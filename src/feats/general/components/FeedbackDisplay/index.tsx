import React from 'react'
import Controller from './controller'

export const FeedbackDisplay = (props) => {
  const controller = Controller.getInstance(props)
  if(!controller)
    return <></>
  const {
    getStyle,
    getFeedback
  } = controller
  return (
    <article className={getStyle()}>
      <h2>{getFeedback().name}</h2>
      <p>{getFeedback().desc}</p>
    </article>
  )
}
