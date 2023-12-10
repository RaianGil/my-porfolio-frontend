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
          {getJob().descriptions.map(description => <li key={description}>{description}</li>)}
        </ul>
        <span>
          {getJob().tools.map(tool => <label key={tool}>{tool}</label>)}
        </span>
      </div>
    </article>
  )
}
