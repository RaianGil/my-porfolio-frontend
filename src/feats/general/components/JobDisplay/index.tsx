import React from 'react'
import Controller from './controller'

export const JobDisplay = (props) => {
  const controller = Controller.getInstance(props)
  if(!controller)
    return <></>
  const {
    getStyle,
    getJob
  } = controller
  return (
    <article className={getStyle()} key={getJob().id}>
      <div>
        <h2>{`${getJob().title} • ${getJob().company}`}</h2>
        <p>{getJob().datePeriod}</p>
      </div>
      <div>
        <ul>
          {getJob().descriptions.map(description => <li>{description}</li>)}
        </ul>
        <span>
          {getJob().tools.map(tool => <label>{tool}</label>)}
        </span>
      </div>
    </article>
  )
}
